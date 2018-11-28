(function() {

    class LostArkMapEditor {

        constructor() {
            this.isInitialized = false;
            this.activeMarkerType = undefined;
            this.markerDataBeingEdited = undefined;
            this.isDraggingMarker = false;
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
                    case MarkerTypeEnum.Internal:
                    case MarkerTypeEnum.TargetMark: {
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

            for(let style in MarkerStyleEnum) {
                let element = $('<button type="button" class="btn btn-secondary" id="ed_toggleStyle' + style +'">' + style + '</button>');
                element.click({style: MarkerStyleEnum[style]}, function(e){
                    LAM.editor.setStyle(e.data.style);
                });

                $('#ed_styleSelectGroup').append(element);
            }

            LAM.map.on("click", function(e) {
                let x = e.latlng.lat;
                let y = e.latlng.lng;

                if(LAM.editor.mode === EditorModeEnum.Add) {
                    LAM.editor.placeMarker(x, y);
                    return;
                }

                console.log("[" + Math.round(x * 100) / 100 + ", " + Math.round(y * 100) / 100 + ']');
            });

            LAM.map.on('mouseup', function(e) {
                LAM.editor.endDragElement(e);
            });

            LAM.map.on('mousemove', function(e) {
                LAM.editor.onMapMouseMove(e);
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

            $('#ed_teleportZoom').change(function(e){
                LAM.editor.teleportZoomChanged($(this).val());
            });

            $('#ed_squareWidth').change(function(e) {
                LAM.editor.squareWidthChanged($(this).val());
            });

            $('#ed_squareHeight').change(function(e) {
                LAM.editor.squareHeightChanged($(this).val());
            });

            $('#ed_circleRadius').change(function(e) {
                LAM.editor.circleRadiusChanged($(this).val());
            });

            // Set Default editor state
            this.resetEditForm();
            this.setMode(EditorModeEnum.Modify);
            this.setStyle(MarkerStyleEnum.Point);
        }

        beginDragElement(e) {
            if(e.target !== undefined && e.target.markerDataId !== undefined) {
                console.log("DRAG_START");
                LAM.map.dragging.disable();
                this.markerClicked(e.target);
                this.isDraggingMarker = this.markerDataBeingEdited !== undefined;
            }
        }

        endDragElement(e){
            LAM.map.dragging.enable();
            this.isDraggingMarker = false;
        }

        onMapMouseMove(e) {
            if(this.isDraggingMarker !== true){
                return;
            }

            this.markerDataBeingEdited.x = e.latlng.lat;
            this.markerDataBeingEdited.y = e.latlng.lng;

            switch (this.markerDataBeingEdited.style) {
                case MarkerStyleEnum.Circle:
                {
                    this.markerDataBeingEdited.activeMarker.setLatLng(e.latlng);
                    break
                }

                case MarkerStyleEnum.Rectangle: {
                    RepositionRectangleMarker(this.markerDataBeingEdited.activeMarker, this.markerDataBeingEdited);
                    break;
                }
            }
        }

        squareWidthChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.size[0] = parseInt(text);
            }
        }

        squareHeightChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.size[1] = parseInt(text);
            }
        }

        circleRadiusChanged(text){
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.radius = parseInt(text);
            }
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

        teleportZoomChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.teleportZoom = parseInt(text);
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

        setStyle(style) {
            this.markerDataBeingEdited = undefined;

            if(this.style !== undefined){
                $('#ed_toggleStyle' + GetKeyByValue(MarkerStyleEnum, this.style)).removeClass('active');
            }

            this.style = style;
            this.resetEditForm();

            $('#ed_markerTypeToolbar').hide();
            $('#ed_rectangleSettings').hide();
            $('#ed_circleSettings').hide();
            switch (style) {
                case MarkerStyleEnum.Point:
                {
                    $('#ed_markerTypeToolbar').show();
                    break
                }

                case MarkerStyleEnum.Rectangle: {
                    $('#ed_rectangleSettings').show();
                    break;
                }

                case MarkerStyleEnum.Circle:
                {
                    $('#ed_circleSettings').show();
                    break;
                }
            }

            $('#ed_toggleStyle' + GetKeyByValue(MarkerStyleEnum, this.style)).addClass('active');
            console.log("EDITOR: Style set to " + GetKeyByValue(MarkerStyleEnum, style));
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
            $('#ed_teleportZoom').val("");
            $('#ed_squareWidth').val("");
            $('#ed_squareHeight').val("");
            $('#ed_circleRadius').val("");
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

            switch (markerData.style) {
                case MarkerStyleEnum.Rectangle:
                {
                    this.setStyle(markerData.style);
                    $('#ed_squareWidth').val(markerData.size[0]);
                    $('#ed_squareHeight').val(markerData.size[1]);

                    break
                }

                case MarkerStyleEnum.Circle:
                {
                    this.setStyle(markerData.style);
                    $('#ed_circleRadius').val(markerData.radius);

                    break
                }

                default: {
                    this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, markerData.type));
                }
            }

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

            if(markerData.teleportZoom !== undefined) {
                $('#ed_teleportZoom').val(markerData.teleportZoom);
            }

            this.markerDataBeingEdited = markerData;
        }

    }

    LAM.editor = new LostArkMapEditor();

}());