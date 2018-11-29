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
                let buttonId = 'ed_markerTypeSelect' + marker;
                let element = $('<button id="' + buttonId +'" type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="' + marker + '"><img src="images/icons/' + MarkerTypeEnum[marker] + '" style="width: 24px; height: 24px"/></button>');
                element.click({type: marker}, function(e) {
                    LAM.editor.selectActiveMarkerType(e.data.type);
                });
                element.tooltip();

                switch (MarkerTypeEnum[marker]) {
                    case MarkerTypeEnum.Zoning:
                    case MarkerTypeEnum.ZoningPVP:
                    case MarkerTypeEnum.ZoningIsland:
                    case MarkerTypeEnum.ZoningIslandFlux:
                    case MarkerTypeEnum.ZoningWorld:
                    case MarkerTypeEnum.TreasureMap:
                    case MarkerTypeEnum.IslandHeart:
                    case MarkerTypeEnum.TargetMark:
                    case MarkerTypeEnum.Internal:
                    case MarkerTypeEnum.SeaAreaAquatic:
                    case MarkerTypeEnum.SeaAreaDeath:
                    case MarkerTypeEnum.SeaAreaIce:
                    case MarkerTypeEnum.SeaAreaSandstorm:
                    case MarkerTypeEnum.SeaAreaSiren:
                    case MarkerTypeEnum.SeaAreaStorm:
                    {
                        $('#ed_markerTypeToolbarSpecial').append(element);
                        break
                    }

                    default:
                    {
                        $('#ed_markerTypeToolbarPOI').append(element);
                    }
                }
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
            if(this.mode !== EditorModeEnum.Move){
                // No drag of elements if not in modify mode
                return;
            }

            if(e.target !== undefined && e.target.markerDataId !== undefined) {

                let markerId = e.target.markerDataId;
                let markerData = LAM.activeMarkerLayer.getMarkerData(markerId);
                if(markerData === undefined){
                    return;
                }

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
                let newValue = parseInt(text);
                if(newValue === undefined || isNaN(newValue)) {
                    return;
                }

                this.markerDataBeingEdited.size[1] = newValue;
                if(this.markerDataBeingEdited.activeMarker !== undefined) {
                    RepositionRectangleMarker(this.markerDataBeingEdited.activeMarker, this.markerDataBeingEdited);
                }
            }
        }

        squareHeightChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                let newValue = parseInt(text);
                if(newValue === undefined || isNaN(newValue)) {
                    return;
                }

                this.markerDataBeingEdited.size[0] = newValue;
                if(this.markerDataBeingEdited.activeMarker !== undefined) {
                    RepositionRectangleMarker(this.markerDataBeingEdited.activeMarker, this.markerDataBeingEdited);
                }
            }
        }

        circleRadiusChanged(text){
            if(this.markerDataBeingEdited !== undefined) {
                let newValue = parseInt(text);
                if(newValue === undefined || isNaN(newValue)) {
                    return;
                }

                this.markerDataBeingEdited.radius = newValue;
                if(this.markerDataBeingEdited.activeMarker !== undefined){
                    this.markerDataBeingEdited.activeMarker.setRadius(newValue);
                }
            }
        }

        tooltipTextChanged(text) {
            if(this.markerDataBeingEdited !== undefined) {
                this.markerDataBeingEdited.title = text;

                if(this.markerDataBeingEdited.style === MarkerStyleEnum.Label && this.markerDataBeingEdited.activeMarker !== undefined) {
                    RefreshMarkerLabel(this.markerDataBeingEdited.activeMarker, this.markerDataBeingEdited);
                }
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

            $('#ed_markerTypeToolbarPOI').hide();
            $('#ed_markerTypeToolbarSpecial').show();
            $('#ed_rectangleSettings').hide();
            $('#ed_circleSettings').hide();
            switch (style) {
                case MarkerStyleEnum.Point:
                case MarkerStyleEnum.Label:
                {
                    $('#ed_markerTypeToolbarPOI').show();
                    $('#ed_markerTypeToolbarSpecial').show();
                    this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, MarkerTypeEnum.Boss));
                    break
                }

                case MarkerStyleEnum.Rectangle: {
                    $('#ed_rectangleSettings').show();

                    this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, MarkerTypeEnum.Internal));
                    break;
                }

                case MarkerStyleEnum.Circle:
                {
                    $('#ed_circleSettings').show();

                    this.selectActiveMarkerType(GetKeyByValue(MarkerTypeEnum, MarkerTypeEnum.Internal));
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

            switch (this.style) {
                case MarkerStyleEnum.Rectangle: {

                    let width = parseInt($('#ed_squareWidth').val());
                    let height = parseInt($('#ed_squareHeight').val());
                    if(width === undefined || isNaN(width) || width === 0 || height === undefined || isNaN(height) ||  height === 0){
                        console.error("Rectangle size is invalid!");
                        return;
                    }

                    markerData.size = [width, height];
                    markerData.style = this.style;
                    break
                }

                case MarkerStyleEnum.Circle: {
                    let radius = parseInt($('#ed_circleRadius').val());
                    if(radius === undefined || isNaN(radius) || radius === 0){
                        console.error("Circle radius is invalid");
                        return;
                    }

                    markerData.radius = radius;
                    markerData.style = this.style;
                    break
                }
            }
            if(this.style !== undefined && this.style !== MarkerStyleEnum.Point) {
                markerData.style = this.style;
            }

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

                case EditorModeEnum.Modify:
                case EditorModeEnum.Move: {
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
                    $('#ed_squareWidth').val(markerData.size[1]);
                    $('#ed_squareHeight').val(markerData.size[0]);

                    break
                }

                case MarkerStyleEnum.Circle:
                {
                    this.setStyle(markerData.style);
                    $('#ed_circleRadius').val(markerData.radius);

                    break
                }
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

            if(markerData.teleportZoom !== undefined) {
                $('#ed_teleportZoom').val(markerData.teleportZoom);
            }

            this.markerDataBeingEdited = markerData;
        }

    }

    LAM.editor = new LostArkMapEditor();

}());