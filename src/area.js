(function () {

    class LostArkArea {

        constructor(name, data) {
            this.name = name;
            this.imagePath = data.path;
            this.zoomLevel = data.zoomLevel;
            this.bounds = data.bounds;
            if(this.bounds === undefined){
                console.error("Area has no bounds set: " + this.name);
            }

            this.maps = {};
            this.markerLayer = undefined;

            LAM.registerArea(this.name, this);
        }

        initialize() {
            this.initializeUI();

            this.markerLayer = LAM.createMarkerLayer({
                imagePath: this.imagePath,
                zoomLevel: this.zoomLevel,
                area: this.name,
                getZoneCallback: this.getZoneForPoint
            });
        }

        loadMarkers() {
            let markerEntries = LAM.areaMarkerData[this.name];
            if(markerEntries !== undefined) {
                for (let i in markerEntries) {
                    this.markerLayer.createMarker(markerEntries[i]);
                }
            }

            for(let name in this.maps){
                let mapData = this.maps[name];
                switch (mapData.type) {
                    case MapTypeEnum.Island: {
                        if(mapData.meta !== undefined && mapData.meta.heart !== undefined && mapData.bounds !== undefined){
                            let position = GetBoundsCenter(mapData.bounds);
                            let markerData = {
                                x: position[0],
                                y: position[1] + 1,
                                type: MarkerTypeEnum.IslandHeart,
                                isGenerated: true,
                                popupText: '##' + _L('Heart of ') + _L(name),
                                hintText: mapData.meta.heart
                            };

                            this.markerLayer.createMarker(markerData);
                        }

                        break
                    }
                }
            }
        }

        getCenterCoordinates() {
            return GetBoundsCenter(this.bounds);
        }

        activate() {
            this.activateLink.addClass('active');

            this.markerLayer.activate();
            LAM.activeMarkerLayer = this.markerLayer;
        }

        deactivate() {
            this.activateLink.removeClass('active');

            this.markerLayer.deactivate();
            LAM.activeMarkerLayer = undefined;
        }

        registerMap(name, data) {
            this.maps[name] = data;

            if(data.bounds === undefined) {
                console.warn("Area has no Bounds set: " + name + " @ " + this.name);
            }
        }

        getZoneForPoint(x, y) {
            if(x === undefined || y === undefined) {
                return undefined;
            }

            // AABB check against map bounds to find the right map (zone)
            for(let mapName in this.maps) {
                let map = this.maps[mapName];
                if(BoundsContain(map.bounds, [x, y])){
                    return mapName;
                }
            }

            return undefined;
        }

        getZoneType(zone) {
            let zoneData = this.maps[zone];
            if(zoneData === undefined){
                return undefined;
            }

            return zoneData.type;
        }

        initializeUI() {
            // Create the navigation link
            let element = $('<li class="nav-item"></li>');
            this.activateLink = $('<a class="nav-link" href="#"></a>');
            this.activateLink.html('<span data-feather="map"></span>' + LAM.loc.getLocalizedTextElement(this.name));

            this.activateLink.click({id: this.name}, function(e) {
                LAM.activateArea(e.data.id);
                LAM.centerCurrentAreaView();
            });

            element.append(this.activateLink);

            $('#mapNav').append(element);
        }
    }

    LAM.createArea = function(name, data){
        return new LostArkArea(name, data);
    }

}());