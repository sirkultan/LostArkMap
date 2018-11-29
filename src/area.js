(function () {

    class LostArkArea {

        constructor(name, data) {
            this.name = name;
            this.nameKr = data['kr'];
            this.imagePath = data['path'];
            this.zoomLevel = data['zoomLevel'];

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
            this.activateLink.html('<span data-feather="map"></span>' + this.name);

            this.activateLink.click({id: this.name}, function(e) {
                LAM.activateArea(e.data.id);
            });

            element.append(this.activateLink);

            $('#mapNav').append(element);
        }
    }

    LAM.createArea = function(name, data){
        return new LostArkArea(name, data);
    }

}());