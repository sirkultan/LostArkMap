(function () {

    class LostArkArea {

        constructor(name, data) {
            this.name = name;
            this.nameKr = data['kr'];
            this.imagePath = data['path'];
            this.zoomLevel = data['zoomLevel'];

            this.maps = {};
            this.markers = [];
            this.activeMarkers = [];
            this.markerLayer = undefined;
            this.markerTypeLayers = {};
            this.mapLayer = undefined;
            this.layerControl = undefined;

            LAM.registerArea(this.name, this);
        }

        initialize() {
            this.initializeUI();
            this.initializeLayers();
        }

        activate(targetMap) {
            this.activateLink.addClass('active');

            targetMap.addLayer(this.mapLayer);
            targetMap.addLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                targetMap.addLayer(this.markerTypeLayers[type]);
            }

            this.layerControl.addTo(targetMap);
        }

        deactivate(targetMap) {
            this.activateLink.removeClass('active');

            targetMap.removeLayer(this.markerLayer);

            for (let type in this.markerTypeLayers) {
                targetMap.removeLayer(this.markerTypeLayers[type]);
            }

            targetMap.removeLayer(this.mapLayer);

            this.layerControl.remove();
        }

        registerMap(name, data) {
            this.maps[name] = data;

            for (let i in data.markers) {
                let markerData = data.markers[i];
                markerData.area = name;
                if(markerData.title === undefined) {
                    markerData.title = MarkerTypeDefaultTitle(markerData.type);
                }

                this.markers.push(markerData);
            }
        }

        initializeUI() {
            // Create the navigation link
            let element = $('<li class="nav-item"></li>');
            this.activateLink = $('<a class="nav-link" href="#"></a>');
            this.activateLink.html('<span data-feather="map"></span>' + this.name);

            this.activateLink.click({id: this.name}, function(e) {
                LAM.activateArea(e.data.id);
            });

            element.append(this.activateLink);

            $('#mapNav').append(element);
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

            // Create all markers on the local layer
            for (let i in this.markers) {
                let markerData = this.markers[i];
                this.createMarker(markerData);
            }

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

        createMarker(markerData) {
            let icon = LAM.getMarkerIcon(markerData.type);
            let marker = L.marker([markerData.x, markerData.y], {
                icon: icon,
                title: markerData.title
            });

            if (markerData.popupText !== undefined || markerData.hintText !== undefined || markerData.hintImage !== undefined) {
                let popupContent = $('<div></div>');

                let locationLink = "?c=" + ContentTypeEnum.AreaMap + "&a=" + this.name + '&x=' + markerData.x + '&y=' + markerData.y + '&z=' + this.zoomLevel;
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

            this.activeMarkers.push(marker);
            this.markerLayer.addLayer(marker);

            let typeLayer = this.markerTypeLayers[markerData.type];
            if (typeLayer === undefined){
                typeLayer = L.layerGroup();
                this.markerTypeLayers[markerData.type] = typeLayer;
            }

            typeLayer.addLayer(marker);

            if(markerData.type === MarkerTypeEnum.TreasureMap) {
                LAM.registerTreasureMap(this.name, markerData);
            }
        }

    }

    LAM.createArea = function(name, data){
        return new LostArkArea(name, data);
    }

}());