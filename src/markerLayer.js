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
            this.generatedMarkerLayer = undefined;

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
            this.generatedMarkerLayer = L.layerGroup();

            let baseLayers = {
                "Map": this.mapLayer
            };

            let overlays = {
                "All Markers": this.markerLayer
            };

            if(Constants.EditMode === true) {
                overlays["Auto Generated"] = this.generatedMarkerLayer;
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
                if(markerData.isGenerated !== true && Constants.EditMode === true) {
                    this.generatedMarkerLayer.removeLayer(markerData.activeMarker);
                }

                let markerTypeLayer = this.markerTypeLayers[markerData.type];
                if(markerTypeLayer !== undefined){
                    markerTypeLayer.removeLayer(markerData.activeMarker);
                }

                delete markerData['activeMarker'];
            }

            delete this.markerIdLookup[id];
            console.log(this.markers.length);
            for(var i = this.markers.length - 1; i >= 0; i--) {
                if(this.markers[i].id === id) {
                    this.markers.splice(i, 1);
                    break;
                }
            }
            console.log(this.markers.length);

            LAM.rebuildStats();
        }

        prepareMarkerData(markerData) {
            // Set a marker id if none is set and its not a generated marker
            if(markerData.isGenerated !== true) {
                if (markerData.id === undefined) {
                    markerData.id = this.nextMarkerId++;
                } else {
                    if (this.nextMarkerId <= markerData.id) {
                        this.nextMarkerId = markerData.id + 1;
                    }
                }
            }

            if(markerData.title === undefined) {
                markerData.title = MarkerTypeDefaultTitle(markerData.type);
            }

            markerData.area = this.area;
            markerData.maxZoomLevel = this.zoomLevel;

            // Detect marker zone
            if(this.area !== undefined && markerData.type !== MarkerTypeEnum.Internal) {
                let markerZone = LAM.areas[this.area].getZoneForPoint(markerData.x, markerData.y);
                if(markerZone === undefined){
                    console.warn("Marker is not in any area zone: [" + markerData.x + "," + markerData.y + "] @ " + markerData.area);
                } else {
                    markerData.zone = markerZone;
                }
            }
        }

        createLeafletMarker(markerData, style) {
            switch (style) {

                case MarkerStyleEnum.Point: {
                    let idPrefix = "";

                    if(markerData.isGenerated !== true) {
                        idPrefix = '#' + (markerData.id + 1) + ' ';
                    }

                    return L.marker([markerData.x, markerData.y], {
                        icon: LAM.getMarkerIcon(markerData.type),
                        draggable: Constants.EditMode && markerData.isGenerated !== true,
                        title:  idPrefix + markerData.title
                    });
                }

                case MarkerStyleEnum.Rectangle: {
                    // Upgrade old bounds data
                    if(markerData.bounds !== undefined){
                        let center = GetBoundsCenter(markerData.bounds);
                        markerData.x = center[0];
                        markerData.y = center[1];
                        markerData.size = GetBoundsSize(markerData.bounds);
                        delete markerData.bounds;
                    }

                    let result = L.rectangle([[0,0],[10, 10]], {
                        color: markerData.color
                    });

                    RepositionRectangleMarker(result, markerData);

                    if(Constants.EditMode && markerData.isGenerated !== true) {
                        result.on('mousedown', function (e){
                            LAM.editor.beginDragElement(e);
                        });
                    }

                    return result;
                }

                case MarkerStyleEnum.Circle: {
                    if(markerData.radius === undefined) {
                        console.error("Circle marker is missing radius information");
                        return undefined;
                    }

                    let result = L.circle([markerData.x, markerData.y], {
                        radius: markerData.radius,
                        color: markerData.color
                    });

                    if(Constants.EditMode && markerData.isGenerated !== true) {
                        result.on('mousedown', function (e){
                            LAM.editor.beginDragElement(e);
                        });
                    }

                    return result;
                }

                default: {
                    console.error("Marker Style not supported: " + style);
                    return undefined;
                }
            }
        }

        setMarkerEvents(marker, markerData) {
            if(Constants.EditMode) {
                marker.on('dragend', function (e) {
                    LAM.editor.markerDragged(e.target);
                });

                marker.on('click', function(e) {
                    LAM.editor.markerClicked(e.target);
                });
            }

            if (markerData.teleportTo !== undefined) {
                marker.teleportData = markerData.teleportTo;
                marker.teleportArea = markerData.teleportArea;
                marker.teleportZoom = markerData.teleportZoom;
                marker.on('click', function(e){
                    if(Constants.EditMode) {
                        console.warn("TeleportMarker disabled in EditMode");
                        return;
                    }

                    LAM.gotoMapArea(this.teleportData, this.teleportArea, this.teleportZoom);
                });
            }
        }

        setMarkerPopup(marker, markerData) {
            if (markerData.popupText === undefined
                && markerData.hintText === undefined
                && markerData.hintImage === undefined) {
                return;
            }

            let popupContent = $('<div></div>');

            let pinId = 'markerPin_' + markerData.area + '_' + markerData.id;
            let copyLocationButton = $('<a href="#" class="markerPinLink" id="' + pinId + '"><img src="images/icons/map-pin.svg"/></a>');

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

        getMarkerPinLink(id) {
            let markerData = this.markerIdLookup[id];
            return LAM.getMapLink(markerData.x, markerData.y, undefined, markerData.area) + '&mid=' + id;
        }

        showCopyMarkerPin(id) {
            LAM.showCopyLinkDialog(this.getMarkerPinLink(id), "Direct link for " + this.area + " Marker #" + id);
        }

        processMarkerSpecialContent(marker, markerData) {
            switch (markerData.type) {

                case MarkerTypeEnum.TreasureMap: {
                    LAM.registerTreasureMap(markerData);
                    return;
                }

                case MarkerTypeEnum.Zoning:
                case MarkerTypeEnum.ZoningIsland:
                case MarkerTypeEnum.ZoningWorld: {
                    if(markerData.isGenerated) {
                        return;
                    }

                    if(markerData.teleportTo === undefined) {
                        console.warn("Zoning Marker has no teleport data: " + markerData.area + " #" + markerData.id);
                        return;
                    }

                    if (markerData.zone === undefined) {
                        return;
                    }

                    // Create the reverse marker data that will point us to this zoning marker
                    let zoneMarkerClone = this.cloneMarkerData(markerData);
                    let zoneType = LAM.getZoneType(markerData.area, markerData.zone);

                    switch (zoneType) {
                        case MapTypeEnum.Dungeon: {
                            zoneMarkerClone.title = markerData.zone + " Dungeon";
                            break;
                        }

                        default: {
                            zoneMarkerClone.title = "To " + markerData.zone;
                            break;
                        }
                    }

                    delete(zoneMarkerClone['id']);
                    zoneMarkerClone.x = markerData.teleportTo[0];
                    zoneMarkerClone.y = markerData.teleportTo[1];
                    zoneMarkerClone.teleportTo = [markerData.x, markerData.y];
                    zoneMarkerClone.isGenerated = true;

                    if(zoneMarkerClone.teleportZoom !== undefined){
                        delete zoneMarkerClone['teleportZoom'];
                    }

                    if(markerData.teleportArea === undefined) {
                        this.createMarker(zoneMarkerClone);
                    } else {
                        let targetMarkerLayer = LAM.getAreaMarkerLayer(markerData.teleportArea);
                        if(targetMarkerLayer === undefined) {
                            console.warn("Zoning Marker has invalid target area: "  + markerData.area + " #" + markerData.id + ' == ' + markerData.teleportArea);
                            return;
                        }

                        zoneMarkerClone.teleportArea = markerData.area;
                        zoneMarkerClone.title = zoneMarkerClone.title + ' (' + markerData.area + ')';
                        targetMarkerLayer.createMarker(zoneMarkerClone);
                    }

                    return;
                }

            }
        }

        createMarker(markerData) {
            this.prepareMarkerData(markerData);

            if(markerData.isGenerated !== true) {
                this.markerIdLookup[markerData.id] = markerData;
            }

            let style = markerData.style;
            if (style === undefined){
                style = MarkerStyleEnum.Point;
            }

            let marker = this.createLeafletMarker(markerData, style);
            if(marker === undefined){
                return;
            }

            markerData.activeMarker = marker;
            marker.area = markerData.area;
            marker.markerDataId = markerData.id;

            this.setMarkerEvents(marker, markerData);
            this.setMarkerPopup(marker, markerData);

            this.markers.push(markerData);
            this.markerLayer.addLayer(marker);

            let typeLayer = this.markerTypeLayers[markerData.type];
            if (typeLayer === undefined){
                typeLayer = L.layerGroup();
                this.layerControl.addOverlay(typeLayer, GetKeyByValue(MarkerTypeEnum, markerData.type));
                this.markerTypeLayers[markerData.type] = typeLayer;
            }

            typeLayer.addLayer(marker);

            if(Constants.EditMode === true && markerData.isGenerated === true) {
                this.generatedMarkerLayer.addLayer(marker);
            }

            this.processMarkerSpecialContent(marker, markerData);

            LAM.rebuildStats();
            return markerData.id;
        }

        getMarkerData(id, noErrorIfFail){
            let result = this.markerIdLookup[id];
            if(result === undefined && noErrorIfFail !== true){
                return undefined;
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

        exportAllMarkerData() {
            this.markers.sort(this.compareMarker);

            let result = [];
            for(let i in this.markers) {
                let markerData = this.markers[i];
                if(markerData.isGenerated === true) {
                    continue;
                }

                let markerCopy = this.cloneMarkerData(markerData);
                result.push(markerCopy);
            }

            return result;
        }

        cloneMarkerData(markerData) {
            let markerCopy = $.extend(true, {}, markerData);
            for(let key in markerCopy) {
                switch (key) {
                    case 'id':
                    case 'x':
                    case 'y':
                    case 'type':
                    case 'teleportTo':
                    case 'teleportArea':
                    case 'teleportZoom':
                    case 'color':
                    case 'style':
                    case 'size':
                    case 'radius': {
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

            return markerCopy;
        }
    }

    $(document).ready(function() {
        $('body').on('click', 'a.markerPinLink', function() {
            let idSegments = this.id.split('_');
            LAM.activeMarkerLayer.showCopyMarkerPin(idSegments[2]);
        });
    });

    LAM.createMarkerLayer = function(data){
        return new LostArkMarkerLayer(data);
    }

}());