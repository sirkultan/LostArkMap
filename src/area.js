(function () {

    class LostArkArea {

        constructor(name, data) {
            this.name = name;
            this.nameKr = data['kr'];
            this.imagePath = data['path'];
            this.ovTileSet = {
                /*"spawn": [
                    0,
                    80,
                    204
                ],*/
                "isOverlay": false,
                "name": name,
                "poititle": "Markers",
                "north_direction": 0,
                "minZoom": 0,
                "bgcolor": "#1a1a1a",
                "zoomLevels": 1,
                "base": "",
                "imgextension": "png",
                "defaultZoom": 1,
                "world": name,
                "maxZoom": 6,
                "path": data.path,
                "showlocationmarker": true
            };

            this.maps = {};

            // TODO

            LAM.registerArea(this.name, this);
        }

        registerMap(name, data) {
            this.maps[name] = data;
        }

        registerMapsInOV() {
            let myLayer = new L.tileLayer('', {
                tileSize: overviewerConfig.CONST.tileSize,
                noWrap: true,
                maxZoom: this.ovTileSet.maxZoom,
                minZoom: this.ovTileSet.minZoom,
                errorTileUrl: this.ovTileSet.base + this.ovTileSet.path + "/blank." + this.ovTileSet.imgextension,
            });

            myLayer.getTileUrl = overviewer.util.getTileUrlGenerator(this.ovTileSet.path, this.ovTileSet.base, this.ovTileSet.imgextension);

            if (this.ovTileSet.isOverlay) {
                overviewer.collections.overlays[this.ovTileSet.world][this.ovTileSet.name] = myLayer;
            } else {
                overviewer.collections.mapTypes[this.ovTileSet.world][this.ovTileSet.name] = myLayer;
            }

            this.ovTileSet.marker_groups = undefined;

            /*if (overviewer.collections.haveSigns == true) {
                // if there are markers for this tileset, create them now
                if ((typeof markers !== 'undefined') && (this.ovTileSet.path in markers)) {
                    console.log("this tileset has markers:", obj);
                    this.ovTileSet.marker_groups = {};

                    for (var mkidx = 0; mkidx < markers[obj.path].length; mkidx++) {
                        var marker_group = new L.layerGroup();
                        var marker_entry = markers[this.ovTileSet.path][mkidx];
                        var icon =  L.icon({iconUrl: marker_entry.icon,
                            className: "ov-marker"});
                        console.log("marker group:", marker_entry.displayName, marker_entry.groupName);

                        for (var dbidx = 0; dbidx < markersDB[marker_entry.groupName].raw.length; dbidx++) {
                            var db = markersDB[marker_entry.groupName].raw[dbidx];
                            var latlng = overviewer.util.fromWorldToLatLng(db.x, db.y, db.z, obj);
                            var m_icon;
                            if (db.icon != undefined) {
                                m_icon = L.icon({iconUrl: db.icon,
                                    className: "ov-marker"});
                            } else {
                                m_icon = icon;
                            }
                            let new_marker = new L.marker(latlng, {icon: m_icon, title: db.hovertext});
                            if (marker_entry.createInfoWindow) {
                                new_marker.bindPopup(db.text);
                            }
                            marker_group.addLayer(new_marker);
                        }
                        obj.marker_groups[marker_entry.displayName] = marker_group;
                    }


                    //var latlng = overviewer.util.fromWorldToLatLng(
                    //        ovconf.spawn[0],
                    //        ovconf.spawn[1],
                    //        ovconf.spawn[2],
                    //        obj);
                    //marker_group.addLayer(L.marker(
                }
            }*/

            myLayer["tileSetConfig"] = this.ovTileSet;

            overviewer.collections.centers[this.ovTileSet.world] = [ [0, 0], this.ovTileSet.defaultZoom ];
        }


    }

    LAM.createArea = function(name, data){
        return new LostArkArea(name, data);
    }

}());