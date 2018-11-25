(function() {

    class LostArkMapEditor {

        constructor() {
            this.isInitialized = false;
            this.activeMarkerType = undefined;
        }

        initialize() {
            this.initializeUI();

            this.isInitialized = true;
        }

        exportAreaMarkers() {
            if(LAM.activeArea === undefined) {
                return '[]';
            }

            let markerLayer = LAM.areas[LAM.activeArea].markerLayer;

            let exportData = JSON.stringify(markerLayer.exportMarkerData(), null, 4);

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

                LAM.editor.placeMarker(x, y);
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

            // Set Default editor state
            this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, MarkerTypeEnum.Boss));
            this.setMode(EditorModeEnum.Add);
        }

        selectActiveMarkerType(type) {
            if(this.activeMarkerType !== undefined) {
                $('#ed_markerTypeSelect' + this.activeMarkerType).removeClass('active');
            }

            this.activeMarkerType = type;
            $('#ed_markerTypeSelect' + this.activeMarkerType).addClass('active');
            console.log("EDITOR: Active Marker set to " + type);
        }

        setMode(mode) {
            this.mode = mode;
            console.log("EDITOR: Mode set to " + GetKeyByValue(EditorModeEnum, mode));
        }

        placeMarker(x, y) {
            x = Math.round(x * 100) / 100;
            y = Math.round(y * 100) / 100;

            console.log("{ x: " + x + ", y: " + y + ", popupText: \"NOTSET\", type: MarkerTypeEnum.NOTSET }");

            let markerData = {
                x: x,
                y: y,
                type: MarkerTypeEnum[this.activeMarkerType]
            };

            let tooltip = $('#ed_tooltipInput').val();
            if(tooltip !== undefined && tooltip !== ""){
                markerData.title = tooltip;
            }

            let hintText = $('#ed_hintTextInput').val();
            if(hintText !== undefined && hintText !== ""){
                markerData.hintText = hintText;
            }

            let hintImage = $('#ed_hintImageInput').val();
            if(hintImage !== undefined && hintImage !== "") {
                markerData.hintImage = LAM.activeArea + '/' + hintImage;
            }

            let markerTarget = LAM.areas[LAM.activeArea].markerLayer;
            markerTarget.createMarker(markerData);
        }

    }

    LAM.editor = new LostArkMapEditor();

}());