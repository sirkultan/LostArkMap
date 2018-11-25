(function () {

    class LostArkArea {

        constructor(name, data) {
            this.name = name;
            this.nameKr = data['kr'];
            this.imagePath = data['path'];
            this.zoomLevel = data['zoomLevel'];

            this.maps = {};
            this.markerLayer = undefined;

            this.legacyMarkers = [];

            LAM.registerArea(this.name, this);
        }

        initialize() {
            this.initializeUI();

            this.markerLayer = LAM.createMarkerLayer({
                imagePath: this.imagePath,
                zoomLevel: this.zoomLevel
            });

            let markerData = LAM.areaMarkerData[this.name];
            if(markerData === undefined) {
                console.log("OLD DATA");
                for (let i in this.legacyMarkers) {
                    this.markerLayer.createMarker(this.legacyMarkers[i]);
                }
            } else {
                console.log("NEW DATA");
                for(let i in markerData) {
                    this.markerLayer.createMarker(markerData[i]);
                }
            }
        }

        activate() {
            this.activateLink.addClass('active');

            this.markerLayer.activate();
        }

        deactivate() {
            this.activateLink.removeClass('active');

            this.markerLayer.deactivate();
        }

        registerMap(name, data) {
            this.maps[name] = data;

            for(let i in data.markers) {
                this.legacyMarkers.push(data.markers[i]);
            }
        }

        /*registerMarker(markerData) {
            markerData.area = this.name;

            // TODO: Use marker position and zone lookup
            markerData.zone = "TODO";

            // Assign unique local id based on type
            if(markerData.id === undefined) {
                markerData.id = this.nextMarkerId++;
            }

            this.markers.push(markerData);
        }*/

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