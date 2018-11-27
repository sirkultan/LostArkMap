(function() {

    class LostArkMapEditor {

        constructor() {
            this.isInitialized = false;
            this.activeMarkerType = undefined;
            this.markerDataBeingEdited = undefined;
        }

        initialize() {
            this.initializeUI();

            this.isInitialized = true;
        }

        exportAreaMarkers() {
            if(LAM.activeArea === undefined) {
                return '[]';
            }

            let exportData = JSON.stringify(LAM.activeMarkerLayer.exportAllMarkerData(), null, 4);

            // Have to fix the syntax of marker type enum
            for(let markerType in MarkerTypeEnum) {
                exportData = exportData.replace(new RegExp('"' + MarkerTypeEnum[markerType]+'"', 'g'), 'MarkerTypeEnum.' + markerType);
            }

            for(let markerStyle in MarkerStyleEnum) {
                exportData = exportData.replace(new RegExp('style": ' + MarkerStyleEnum[markerStyle], 'g'), 'style": MarkerStyleEnum.' + markerStyle);
            }

            return exportData;
        }

        initializeUI() {
            for(let marker in MarkerTypeEnum) {
                switch (MarkerTypeEnum[marker]) {
                    case MarkerTypeEnum.Internal: {
                        continue;
                    }
                }

                let buttonId = 'ed_markerTypeSelect' + marker;
                let element = $('<button id="' + buttonId +'" type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="' + marker + '"><img src="images/icons/' + MarkerTypeEnum[marker] + '" style="width: 24px; height: 24px"/></button>');
                element.click({type: marker}, function(e) {
                    LAM.editor.selectActiveMarkerType(e.data.type);
                });
                element.tooltip();

                $('#ed_markerTypeToolbar').append(element);
            }

            for(let mode in EditorModeEnum) {
                let element = $('<button type="button" class="btn btn-secondary" id="ed_toggleMode' + mode +'">' + mode + '</button>');
                element.click({mode: EditorModeEnum[mode]}, function(e){
                    LAM.editor.setMode(e.data.mode);
                });

                $('#ed_modeSelectGroup').append(element);
            }

            LAM.map.on("click", function(e) {
                let x = e.latlng.lat;
                let y = e.latlng.lng;

                if(LAM.editor.mode === EditorModeEnum.Add) {
                    LAM.editor.placeMarker(x, y);
                    return;
                }

                console.log("[" + Math.round(x) + ", " + Math.round(y) + ']');
            });

            $('#ed_exportButton').click(function(e){
                let data = LAM.editor.exportAreaMarkers();
                $("<a />", {
                    "download": "data.json",
                    "href" : "data:application/json," + encodeURIComponent(data)
                }).appendTo("body")
                    .click(function() {
                        $(this).remove()
                    })[0].click();
            });

            $('#ed_tooltipInput').change(function(e) {
                LAM.editor.tooltipTextChanged($(this).val());
            });

            $('#ed_popupTitleInput').change(function(e) {
                LAM.editor.popupTitleTextChanged($(this).val());
            });

            $('#ed_hintTextInput').change(function(e) {
                LAM.editor.hintTextChanged($(this).val());
            });

            $('#ed_hintImageInput').change(function(e) {
                LAM.editor.hintImageChanged($(this).val());
            });

            $('#ed_teleportTo').change(function(e){
                LAM.editor.teleportToChanged($(this).val());
            });

            $('#ed_teleportArea').change(function(e){
                LAM.editor.teleportAreaChanged($(this).val());
            });

            // Set Default editor state
            this.resetEditForm();
            this.setMode(EditorModeEnum.Modify);
        }

        tooltipTextChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.title = text;
            }
        }

        popupTitleTextChanged(text){
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.popupText = text;
            }
        }

        hintTextChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.hintText = text;
            }
        }

        hintImageChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.hintImage = text;
            }
        }

        teleportToChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.teleportTo = JSON.parse(text);
            }
        }

        teleportAreaChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.teleportArea = text;
            }
        }

        selectActiveMarkerType(type) {
            if(this.activeMarkerType !== undefined) {
                $('#ed_markerTypeSelect' + this.activeMarkerType).removeClass('active');
            }

            this.activeMarkerType = type;

            if(this.markerDataBeingEdited !== undefined && this.markerDataBeingEdited.type !== MarkerTypeEnum[type]){
                this.markerDataBeingEdited.type = MarkerTypeEnum[type];

                if(this.markerDataBeingEdited.id !== undefined) {
                    LAM.activeMarkerLayer.deleteMarker(this.markerDataBeingEdited.id);
                    LAM.activeMarkerLayer.createMarker(this.markerDataBeingEdited);
                }
            }

            $('#ed_markerTypeSelect' + this.activeMarkerType).addClass('active');
            console.log("EDITOR: Active Marker set to " + type);
        }

        setMode(mode) {
            this.markerDataBeingEdited = undefined;

            if(this.mode !== undefined){
                $('#ed_toggleMode' + GetKeyByValue(EditorModeEnum, this.mode)).removeClass('active');
            }

            this.mode = mode;
            this.resetEditForm();

            if(mode === EditorModeEnum.Add){
                this.markerDataBeingEdited = {};
            } else {
                this.markerDataBeingEdited = undefined;
            }

            $('#ed_toggleMode' + GetKeyByValue(EditorModeEnum, this.mode)).addClass('active');
            console.log("EDITOR: Mode set to " + GetKeyByValue(EditorModeEnum, mode));
        }

        placeMarker(x, y) {
            x = Math.round(x * 100) / 100;
            y = Math.round(y * 100) / 100;

            let markerData = $.extend(true, {
                x: x,
                y: y,
                type: MarkerTypeEnum[this.activeMarkerType]
            }, this.markerDataBeingEdited);

            LAM.activeMarkerLayer.createMarker(markerData);
        }

        markerDragged(marker) {
            let newPosition = marker.getLatLng();
            let markerId = marker.markerDataId;
            let markerData = LAM.activeMarkerLayer.getMarkerData(markerId);

            markerData.x = newPosition.lat;
            markerData.y = newPosition.lng;
        }

        resetEditForm(){
            this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, MarkerTypeEnum.Boss));

            $('#ed_tooltipInput').val("");
            $('#ed_popupTitleInput').val("");
            $('#ed_hintTextInput').val("");
            $('#ed_hintImageInput').val("");
            $('#ed_teleportTo').val("");
            $('#ed_teleportArea').val("");
        }

        markerClicked(marker) {
            this.markerDataBeingEdited = undefined;

            switch (this.mode) {
                case EditorModeEnum.Delete: {
                    LAM.activeMarkerLayer.deleteMarker(marker.markerDataId);
                    return;
                }

                case EditorModeEnum.Modify: {
                    break;
                }
            }

            this.resetEditForm();

            let markerId = marker.markerDataId;
            let markerData = LAM.activeMarkerLayer.getMarkerData(markerId);
            if(markerData === undefined){
                return;
            }

            this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, markerData.type));

            if(markerData.title !== undefined && markerData.title !== MarkerTypeDefaultTitle(markerData.type)) {
                $('#ed_tooltipInput').val(markerData.title);
            }

            if(markerData.popupText !== undefined){
                $('#ed_popupTitleInput').val(markerData.popupText);
            }

            if(markerData.hintText !== undefined) {
                $('#ed_hintTextInput').val(markerData.hintText);
            }

            if(markerData.hintImage !== undefined) {
                $('#ed_hintImageInput').val(markerData.hintImage);
            }

            if(markerData.teleportTo !== undefined) {
                $('#ed_teleportTo').val(JSON.stringify(markerData.teleportTo))
            }

            if(markerData.teleportArea !== undefined) {
                $('#ed_teleportArea').val(markerData.teleportArea);
            }

            this.markerDataBeingEdited = markerData;
        }

    }

    LAM.editor = new LostArkMapEditor();

}());