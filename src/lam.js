let LAM = (function(){

    class LostArkMap {

        constructor() {
            this.areas = {};
            this.markerIcons = {};
            this.activeArea = undefined;
        }

        initialize() {
            //overviewer.util.initialize();

            this.map = L.map('la_map', {
                crs: L.CRS.Simple,
                minZoom: 0});

            this.map.setView([0, 0], 1)

            this.map.on("click", function(e) {

                let x = e.latlng.lat;
                let y = e.latlng.lng;

                x = Math.round(x * 100) / 100;
                y = Math.round(y * 100) / 100;

                console.log("{ x: " + x + ", y: " + y + ", title: \"<Title>\", type: MarkerTypeEnum.<UNKNOWN> }");
            });

            for (let name in this.areas) {
                this.areas[name].initialize();

                if(this.activeArea === undefined) {
                    this.activateArea(name);
                }
            }

            feather.replace();
        }

        registerArea(name, entry) {
            this.areas[name] = entry;

            console.log("Registered Area " + name);

        }

        activateArea(name) {
            if(this.activeArea !== undefined) {
                this.areas[this.activeArea].deactivate(this.map);
            }

            this.areas[name].activate(this.map);
            this.activeArea = name;
        }

        getMarkerIcon(markerType) {
            let result = this.markerIcons[markerType];
            if (result === undefined) {
                result = L.icon({
                    iconUrl: 'images/icons/' + markerType,
                    iconSize: [20, 20],
                    className: "ov-marker"});
                this.markerIcons[markerType] = result;
            }

            return result;
        }

        getMarkerDefaultTitle(markerType) {
            switch (markerType) {
                case MarkerTypeEnum.Mokoko: {
                    return "Mokoko Seed";
                }

                case MarkerTypeEnum.Vista: {
                    return "Vista";
                }
            }
        }

        getMapTileUrl(path) {
            return function(o) {
                var url = path;
                var zoom = o.z;
                if (o.x < 0 || o.x >= Math.pow(2, zoom) ||
                    o.y < 0 || o.y >= Math.pow(2, zoom)) {
                    url += '/blank';
                } else if (zoom === 0) {
                    url += '/base';
                } else {
                    for (var z = zoom - 1; z >= 0; --z) {
                        var x = Math.floor(o.x / Math.pow(2, z)) % 2;
                        var y = Math.floor(o.y / Math.pow(2, z)) % 2;
                        url += '/' + (x + 2 * y);
                    }
                }

                return (url + '.png');
            }
        }

    }

    return new LostArkMap();

})();