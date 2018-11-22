let LAM = (function(){

    class LostArkMap {

        constructor() {
            this.areas = {};
            this.markerIcons = {};
            this.dynamicLayers = {};
            this.activeArea = undefined;
        }

        initialize() {

            this.map = L.map('la_map', {
                crs: L.CRS.Simple,
                minZoom: 0});

            this.map.setView([0, 0], 1)

            this.map.on("click", function(e) {

                let x = e.latlng.lat;
                let y = e.latlng.lng;

                x = Math.round(x * 100) / 100;
                y = Math.round(y * 100) / 100;

                console.log("{ x: " + x + ", y: " + y + ", popupText: \"NOTSET\", type: MarkerTypeEnum.NOTSET }");
            });

            for (let name in this.areas) {
                this.areas[name].initialize();

                if(this.activeArea === undefined) {
                    this.activateArea(name);
                }
            }

            feather.replace();

            this.rebuildStats();

            $.urlParam = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results === null) {
                    return undefined;
                }

                return decodeURI(results[1]) || 0;
            };

            $('#createLayerButton').on('click', function (e) {
                let name = $('#createLayerForm-name').val();
                if(name === undefined || name === null || name === "") {
                    return;
                }

                LAM.createDynamicLayer(name, {});
            });

            this.processUrlParameters();
        }

        processUrlParameters() {
            let area = $.urlParam('area');
            let x = $.urlParam('x');
            let y = $.urlParam('y');
            let zoom = $.urlParam('zoom');
            if(area === undefined || x === undefined || y === undefined) {
                return;
            }

            if(zoom === undefined) {
                zoom = 0;
            }

            this.activateArea(area);
            //this.map.setZoom(zoom);
            this.map.setView([x, y], zoom);
        }

        registerArea(name, entry) {
            this.areas[name] = entry;

            console.log("Registered Area " + name);

            $('#createLayerForm-targetArea').append($('<option>' + name + '</option>'));
        }

        activateArea(name) {
            if(this.activeArea !== undefined) {
                this.areas[this.activeArea].deactivate(this.map);
            }

            this.areas[name].activate(this.map);
            this.activeArea = name;
        }

        registerDynamicLayer(entry) {
            this.dynamicLayers[entry.id] = entry;
        }

        unregisterDynamicLayer(entry) {
            delete this.dynamicLayers[entry.id];
        }

        activateDynamicLayer(id) {
            // TODO
        }

        deactivateDynamicLayer(id) {
            // TODO
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

                case MarkerTypeEnum.SecretPassage: {
                    return "Secret Passage";
                }

                case MarkerTypeEnum.Boss: {
                    return "Boss";
                }

                case MarkerTypeEnum.HiddenStory: {
                    return "Hidden Story";
                }

                case MarkerTypeEnum.WorldBoss: {
                    return "World Boss";
                }

                case MarkerTypeEnum.FavorNPC: {
                    return "Favor NPC";
                }

                case MarkerTypeEnum.CookingIngredient: {
                    return "Cooking Ingredient";
                }

                case MarkerTypeEnum.FoodIngredient: {
                    return "Food Ingredient";
                }

                case MarkerTypeEnum.Zoning: {
                    return "Zone change";
                }

                case MarkerTypeEnum.TreasureBox: {
                    return "Treasure Box";
                }

                case MarkerTypeEnum.PlayInstrument: {
                    return "Play Instrument";
                }

                case MarkerTypeEnum.GroupQuest: {
                    return "Group Quest";
                }

                case MarkerTypeEnum.OtherStory: {
                    return "Other Story";
                }

                default: {
                    console.warn("Unhandled Marker Type: " + markerType);
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
                
                return (url + '.jpg');
            }
        }

        rebuildStats() {
            let statsPanel = $('#stats');
            statsPanel.empty();

            let markerStats = {};
            for (let name in this.areas) {
                let area = this.areas[name];
                for (let i in area.markers) {
                    let markerData = area.markers[i];
                    if (markerStats[markerData.type] === undefined) {
                        markerStats[markerData.type] = 0;
                    }

                    markerStats[markerData.type]++;
                }
            }

            for (let typeName in MarkerTypeEnum) {
                let markerImage = MarkerTypeEnum[typeName];
                switch (markerImage) {
                    // Ignore some markers
                    case MarkerTypeEnum.Zoning: {
                        continue;
                    }
                }
                let markerTitle = this.getMarkerDefaultTitle(markerImage);
                let markerCount = markerStats[markerImage];
                if(markerCount === undefined) {
                    markerCount = 0;
                }

                let element = $('<li class="nav-item"></li>');
                this.activateLink = $('<a class="nav-link" href="#"></a>');
                this.activateLink.html('<span><img class="feather" src="images/icons/' + markerImage + '"/></span>' + markerCount + " " + markerTitle);

                element.append(this.activateLink);

                statsPanel.append(element);
            }
        }

    }

    return new LostArkMap();

})();