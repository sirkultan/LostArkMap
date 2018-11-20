let LAM = (function(){

    class LostArkMap {

        constructor() {
            this.areas = {};
        }

        initialize() {
            overviewer.util.initialize();

            for (let name in this.areas) {
                overviewer.collections.mapTypes[name] = {};
                overviewer.collections.overlays[name] = {};
                overviewer.worldCtrl.addWorld(name);

                this.areas[name].registerMapsInOV();
            }

            overviewer.currentWorld = Object.keys(this.areas)[0];

            overviewer.layerCtrl = L.control.layers(
                overviewer.collections.mapTypes[overviewer.currentWorld],
                overviewer.collections.overlays[overviewer.currentWorld],
                {collapsed: false})
                .addTo(overviewer.map);

            let center = overviewer.collections.centers[overviewer.currentWorld];
            overviewer.map.setView(center[0], center[1]);

            if (!overviewer.util.initHash()) {
                overviewer.worldCtrl.onChange({target: {value: overviewer.currentWorld}});
            }

            overviewer.map.on("click", function(e) {
                console.log(e.latlng);
                var area = LAM.areas[overviewer.currentWorld];
                var point = overviewer.util.fromLatLngToWorld(e.latlng.lat, e.latlng.lng, area.ovTileSet);
                console.log(point);
            });
        }

        registerArea(name, entry) {
            this.areas[name] = entry;

            console.log("Registered Area " + name);


        }

    }

    return new LostArkMap();

})();