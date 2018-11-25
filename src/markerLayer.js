(function () {

    class LostArkMarkerLayer {

        constructor(data) {
            this.imagePath = data['imagePath'];
            this.zoomLevel = data['zoomLevel'];

            this.markers = [];
            this.markerLayer = undefined;
            this.markerTypeLayers = {};
            this.mapLayer = undefined;
            this.layerControl = undefined;
            this.nextMarkerId = 0;

            this.initializeLayers();
        }

        initializeLayers() {
            this.mapLayer = L.tileLayer('', {
                tileSize: Constants.TileSize,
                noWrap: true,
                maxZoom: this.zoomLevel ? this.zoomLevel : 0,
                minZoom: 0,
                errorTileUrl: Constants.ErrorImagePath
            });

            this.mapLayer.getTileUrl = LAM.getMapTileUrl(this.imagePath);

            this.markerLayer = L.layerGroup();

            let baseLayers = {
                "Map": this.mapLayer
            };

            let overlays = {
                "All Markers": this.markerLayer
            };

            for (let type in this.markerTypeLayers) {
                overlays[MarkerTypeDefaultTitle(type)] = this.markerTypeLayers[type];
            }

            this.layerControl = L.control.layers(baseLayers, overlays);
        }

        activate() {
            LAM.map.addLayer(this.mapLayer);
            LAM.map.addLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                LAM.map.addLayer(this.markerTypeLayers[type]);
            }

            this.layerControl.addTo(LAM.map);
        }

        deactivate() {
            LAM.map.removeLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                LAM.map.removeLayer(this.markerTypeLayers[type]);
            }

            LAM.map.removeLayer(this.mapLayer);

            this.layerControl.remove();
        }

        createMarker(markerData) {
            if(markerData.id === undefined) {
                markerData.id = this.nextMarkerId++;
            } else {
                if(this.nextMarkerId <= markerData.id) {
                    this.nextMarkerId = markerData.id + 1;
                }
            }

            if(markerData.title === undefined) {
                markerData.title = MarkerTypeDefaultTitle(markerData.type);
            }

            let icon = LAM.getMarkerIcon(markerData.type);

            let style = markerData.style;
            if (style === undefined){
                style = MarkerStyleEnum.Point;
            }

            let marker = undefined;
            switch (style) {

                case MarkerStyleEnum.Point: {
                    marker = L.marker([markerData.x, markerData.y], {
                        icon: icon,
                        draggable: Constants.EditMode,
                        title: '#' + (markerData.id + 1) + ' ' + markerData.title
                    });

                    break;
                }

                case MarkerStyleEnum.Rectangle: {
                    marker = L.rectangle(markerData.bounds, {
                        draggable: Constants.EditMode,
                        color: markerData.color
                    });

                    break;
                }

                default: {
                    console.error("Marker Style not supported: " + style);
                    return;
                }
            }

            marker.area = markerData.area;
            marker.markerDataId = markerData.areaId;
            if(Constants.EditMode) {
                marker.on('dragend', function (e) {
                    let newPosition = e.target.getLatLng();
                    let markerData = LAM.areas[e.target.area].markers[e.target.markerDataId];
                    markerData.x = newPosition.lat;
                    markerData.y = newPosition.lng;
                });
            }

            if (markerData.popupText !== undefined || markerData.hintText !== undefined || markerData.hintImage !== undefined) {
                let popupContent = $('<div></div>');

                let locationLink = "?c=" + ContentTypeEnum.AreaMap + "&a=" + markerData.area + '&x=' + markerData.x + '&y=' + markerData.y + '&z=' + markerData.zoomLevel;
                let copyLocationButton = $('<a href="'+locationLink+'"><img src="images/icons/map-pin.svg"/></a>');

                popupContent.append(copyLocationButton);

                if(markerData.popupText !== undefined){
                    popupContent.append($('<h4>' + markerData.popupText + '</h4>'))
                }

                if(markerData.hintImage !== undefined){
                    popupContent.append($('<img src="images/marker_hints/' + markerData.hintImage + '"/>'))
                }

                if(markerData.hintText !== undefined){
                    popupContent.append($('<p>' + markerData.hintText + '</p>'))
                }

                marker.bindPopup(popupContent.html());
            }

            if (markerData.teleportTo !== undefined) {
                marker.teleportData = markerData.teleportTo;
                marker.teleportArea = markerData.teleportArea;
                marker.on('click', function(e){
                    if(this.teleportArea !== undefined) {
                        LAM.activateArea(this.teleportArea);
                    }

                    LAM.map.flyTo(this.teleportData);
                });
            }

            this.markers.push(markerData);
            this.markerLayer.addLayer(marker);

            let typeLayer = this.markerTypeLayers[markerData.type];
            if (typeLayer === undefined){
                typeLayer = L.layerGroup();
                this.markerTypeLayers[markerData.type] = typeLayer;
            }

            typeLayer.addLayer(marker);

            if(markerData.type === MarkerTypeEnum.TreasureMap) {
                LAM.registerTreasureMap(markerData);
            }
        }

        exportMarkerData() {
            let result = [];
            for(let i in this.markers) {
                let markerData = this.markers[i];

                let markerCopy = $.extend(true, {}, markerData);
                for(let key in markerCopy) {
                    switch (key) {
                        case 'id':
                        case 'x':
                        case 'y':
                        case 'popupText':
                        case 'hintImage':
                        case 'hintText':
                        case 'type':
                        case 'teleportTo':
                        case 'teleportArea':
                        case 'color':
                        case 'style':
                        case 'bounds': {
                            break;
                        }

                        case 'title': {
                            if(MarkerTypeDefaultTitle(markerData.type) === markerData.title) {
                                delete markerCopy[key];
                            }

                            break;
                        }

                        default:
                        {
                            delete markerCopy[key];
                            break;
                        }
                    }
                }

                result.push(markerCopy);
            }

            return result;
        }

    }

    LAM.createMarkerLayer = function(data){
        return new LostArkMarkerLayer(data);
    }

}());