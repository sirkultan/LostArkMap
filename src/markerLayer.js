(function () {

    class LostArkMarkerLayer {

        constructor(data) {
            this.imagePath = data['imagePath'];
            this.zoomLevel = data['zoomLevel'];
            this.area = data['area'];

            this.markers = [];
            this.markerIdLookup = {};
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

        deleteMarker(id) {
            if(id === undefined) {
                return;
            }

            let markerData = this.markerIdLookup[id];
            if(markerData.activeMarker !== undefined){
                this.markerLayer.removeLayer(markerData.activeMarker);
                delete markerData['activeMarker'];
            }

            delete this.markerIdLookup[id];
            for(var i = this.markers.length - 1; i >= 0; i--) {
                if(this.markers[i].id === id) {
                    this.markers.splice(i, 1);
                    break;
                }
            }

            LAM.rebuildStats();
        }

        createMarker(markerData) {
            if(markerData.id === undefined) {
                markerData.id = this.nextMarkerId++;
            } else {
                if(this.nextMarkerId <= markerData.id) {
                    this.nextMarkerId = markerData.id + 1;
                }
            }

            this.markerIdLookup[markerData.id] = markerData;

            if(markerData.title === undefined) {
                markerData.title = MarkerTypeDefaultTitle(markerData.type);
            }

            markerData.area = this.area;
            markerData.maxZoomLevel = this.zoomLevel;

            if(this.area !== undefined && markerData.type !== MarkerTypeEnum.Internal) {
                let markerZone = LAM.areas[this.area].getZoneForPoint(markerData.x, markerData.y);
                if(markerZone === undefined){
                    console.warn("Marker is not in any area zone: [" + markerData.x + "," + markerData.y + "] @ " + markerData.area);
                } else {
                    markerData.zone = markerZone;
                }
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

            markerData.activeMarker = marker;
            marker.area = markerData.area;
            marker.markerDataId = markerData.id;
            if(Constants.EditMode) {
                marker.on('dragend', function (e) {
                    LAM.editor.markerDragged(e.target);
                });

                marker.on('click', function(e) {
                    LAM.editor.markerClicked(e.target);
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
                    if(Constants.EditMode) {
                        console.warn("TeleportMarker disabled in EditMode");
                        return;
                    }

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

            LAM.rebuildStats();
            return markerData.id;
        }

        getMarkerData(id, noErrorIfFail){
            let result = this.markerIdLookup[id];
            if(result === undefined && noErrorIfFail !== true){
                console.error("Marker data not found for id " + id);
            }

            return result;
        }

        compareMarker(a, b){
            if(a.id > b.id) {
                return 1;
            }

            if(a.id < b.id) {
                return -1;
            }

            return 0;
        }

        exportMarkerData() {
            this.markers.sort(this.compareMarker);

            let result = [];
            for(let i in this.markers) {
                let markerData = this.markers[i];

                let markerCopy = $.extend(true, {}, markerData);
                for(let key in markerCopy) {
                    switch (key) {
                        case 'id':
                        case 'x':
                        case 'y':
                        case 'type':
                        case 'teleportTo':
                        case 'teleportArea':
                        case 'color':
                        case 'style':
                        case 'bounds': {
                            break;
                        }

                        case 'hintText':
                        case 'hintImage':
                        case 'popupText': {
                            if(markerCopy[key] === "") {
                                delete markerCopy[key];
                            }

                            break;
                        }

                        case 'title': {
                            if(markerCopy.title === "" || MarkerTypeDefaultTitle(markerData.type) === markerData.title) {
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

        changeMarkerId(currentId, newId) {
            if(currentId === newId) {
                return;
            }

            let markerData = this.getMarkerData(currentId);
            if(markerData === undefined){
                return;
            }

            let existingMarkerData = this.getMarkerData(newId, true);
            if(existingMarkerData !== undefined){
                console.error("Cannot change marker id from " + id + " to " + newId + ", data already exists with that id");
                return;
            }

            markerData.id = newId;
            console.log("Marker Id changed from " + currentId + " to " + newId);
        }

    }

    LAM.createMarkerLayer = function(data){
        return new LostArkMarkerLayer(data);
    }

}());