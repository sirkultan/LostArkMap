let LAM = (function(){

    class LostArkMap {

        constructor() {
            this.areas = {};
            this.markerIcons = {};
            this.dynamicLayers = {};
            this.activeArea = undefined;
            this.activeDynamicLayer = undefined;
            this.activeContent = undefined;
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

            for(let content in ContentTypeEnum) {
                $('#' + ContentTypeEnum[content]).hide();

                // content_treasure_map_toggle
                let contentToggle = $('#' + ContentTypeEnum[content] + '_toggle');
                contentToggle.click({id: ContentTypeEnum[content]}, function(e) {
                    LAM.activateContent(e.data.id);
                });

                contentToggle.removeClass('active');
            }

            this.processUrlParameters();
        }

        processUrlParameters() {
            let content = $.urlParam('c');
            if (content === undefined) {
                this.activateArea('Artemis');
                return;
            }

            if(content === ContentTypeEnum.AreaMap) {

                let area = $.urlParam('a');
                let x = $.urlParam('x');
                let y = $.urlParam('y');
                let zoom = $.urlParam('z');
                if (area === undefined || x === undefined || y === undefined) {
                    return;
                }

                if (zoom === undefined) {
                    zoom = 0;
                }

                this.activateArea(area);
                this.map.setView([x, y], zoom);
            } else {
                this.activateContent(content);
            }
        }

        activateContent(type) {
            if(this.activeContent !== undefined) {
                $('#' + this.activeContent).hide();
                $('#' + this.activeContent + '_toggle').removeClass('active');

                if(this.activeContent === ContentTypeEnum.AreaMap && this.activeArea !== undefined) {
                    this.areas[this.activeArea].deactivate(this.map);
                }
            }

            this.activeContent = type;
            $('#' + type).show();

            $('#' + type + '_toggle').addClass('active');
        }

        registerArea(name, entry) {
            this.areas[name] = entry;

            console.log("Registered Area " + name);

            $('#createLayerForm-targetArea').append($('<option>' + name + '</option>'));
        }

        activateArea(name) {
            this.activateContent(ContentTypeEnum.AreaMap);

            if(this.activeArea !== undefined) {
                this.areas[this.activeArea].deactivate(this.map);
            }

            this.areas[name].activate(this.map);
            this.activeArea = name;
        }

        registerDynamicLayer(entry) {
            this.dynamicLayers[entry.id] = entry;
        }

        unregisterDynamicLayer(id) {
            if(this.activeDynamicLayer === id) {
                this.dynamicLayers[id].deactivate();
            }

            delete this.dynamicLayers[id];
        }

        activateDynamicLayer(id) {
            if(this.activeDynamicLayer !== undefined) {
                this.dynamicLayers[this.activeDynamicLayer].deactivate();
            }

            this.dynamicLayers[id].activate();
            this.activeDynamicLayer = id;
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

        registerGuide(title, url, preview) {
            let guideElement = $('<div class="col-sm" >' +
                '<div class="card mb-4 shadow-sm" style="width: 250px;">' +
                '<img class="card-img-top" src="images/guides/'+ preview +'" style="width: 230px; height: 230px;" />' +
                '<div class="card-body">' +
                '<p class="card-text">' + title + '</p>' +
                '<div class="d-flex justify-content-between align-items-center">' +
                '<div class="btn-group">' +
                '<a role="button" class="btn btn-sm btn-outline-secondary" href="' + url +'" target="_blank">Show</a>' +
                '</div></div></div></div></div>');

            $('#content_guides_list').append(guideElement);
        }

        registerTreasureMap(area, markerData) {
            let locationLink = "?c=" + ContentTypeEnum.AreaMap + "&a=" + area + '&x=' + markerData.x + '&y=' + markerData.y + '&z=' + this.areas[area].zoomLevel;
            let guideElement = $('<div class="card" style="margin: 8px">' +
                '<img class="card-img-top" src="images/marker_hints/'+ markerData.hintImage +'" style="width: 180px; height: 228px;"/>' +
                '<div>' +
                '<p class="card-text">' + markerData.area + '<br><b>' + area + '</b></p>' +
                '<a role="button" class="btn btn-sm btn-outline-secondary" href="' + locationLink + '">Show</a>' +
                '</div></div>');

            $('#content_treasure_map_list').append(guideElement);
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
                    case MarkerTypeEnum.Internal:
                    case MarkerTypeEnum.Zoning: {
                        continue;
                    }
                }
                let markerTitle = MarkerTypeDefaultTitle(markerImage);
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