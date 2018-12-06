let LAM = (function(){

    class LostArkMap {

        constructor() {
            this.areas = {};
            this.areaMarkerData = {};
            this.markerIcons = {};
            this.dynamicLayers = {};
            this.activeArea = undefined;
            this.activeDynamicLayer = undefined;
            this.activeMarkerLayer = undefined;
            this.activeContent = undefined;
            this.mapClickMode = undefined;
            this.intervals = {};
            this.lastUpdateTime = 0;
        }

        createInterval(name, callback, delay, data) {
            this.intervals[name] = {c: callback, d: delay, e: 0, data: data}
        }

        removeInterval(name) {
            delete this.intervals[name];
        }

        onMapClick(e) {
            let x = e.latlng.lat;
            let y = e.latlng.lng;

            console.log('[' + x + ', ' + y + ']');

            switch (this.mapClickMode) {
                case MapClickMode.Default: {
                    break;
                }

                case MapClickMode.ZoomTo: {
                    this.mapClickMode = MapClickMode.Default;

                    L.DomUtil.removeClass(LAM.map._container,'crosshair-cursor-enabled');
                    this.map.flyTo([x, y], this.areas[this.activeArea].zoomLevel - 1);
                    break;
                }

                case MapClickMode.CopyPosition: {
                    this.mapClickMode = MapClickMode.Default;

                    L.DomUtil.removeClass(LAM.map._container,'crosshair-cursor-enabled');
                    this.showCopyLinkDialog(this.getMapLink(x, y), "Copy Location");
                    break
                }
            }
        }

        showCopyLinkDialog(path, title) {
            let link = "";
            if(window.location.origin !== null && window.location.origin !== "null") {
                link = window.location.origin;
            } else {
                link = 'file://';
            }

            this.showCopyTextDialog(link + window.location.pathname + path, title);
        }

        showCopyTextDialog(text, title){
            $('#copyTextModalTitle').text(title);
            $('#copyTextModal-text').val(text);
            $('#copyTextModal').modal();
        }

        getMapLink(x, y, customZoomLevel, customArea){
            if(x === undefined || y === undefined){
                return;
            }

            // Clamp to 2 digits
            x = ToMapPrecision(x);
            y = ToMapPrecision(y);

            let area = customArea || this.activeArea;
            let zoomLevel = customZoomLevel || LAM.map.getZoom();
            let areaMaxZoomLevel = this.areas[area].zoomLevel;

            // Ensure we have a valid zoom level
            if(zoomLevel > areaMaxZoomLevel || zoomLevel === undefined){
                zoomLevel = areaMaxZoomLevel;
            }

            // Ensure we don't link too far zoomed out
            if(zoomLevel < areaMaxZoomLevel - 1){
                zoomLevel = areaMaxZoomLevel - 1;
            }

            return "?c=" + ContentTypeEnum.AreaMap + "&a=" + area.replace(' ', '_') + '&x=' + x + '&y=' + y + '&z=' + zoomLevel;
        }

        initializeMap() {
            this.mapClickMode = MapClickMode.Default;

            this.map = L.map('la_map', {
                crs: L.CRS.Simple,
                minZoom: 0});

            this.map.setView([0, 0], 1);

            LAM.map.on("click", function(e) {
                LAM.onMapClick(e);
            });

            $('#createLayerButton').on('click', function (e) {
                let name = $('#createLayerForm-name').val();
                if(name === undefined || name === null || name === "") {
                    return;
                }

                LAM.createDynamicLayer(name, {});
            });

            $('.hard-map-link').on('click', function () {
                let area = $(this).data('area');
                let position = [$(this).data('tx'), $(this).data('ty')];
                let zoom = $(this).data('zoom');

                LAM.gotoMapArea(position, area, zoom);
            });

            L.easyButton('fa-home', function(btn, map){
                LAM.centerCurrentAreaView();
            }).addTo( this.map );

            L.easyButton('fa-crosshairs', function(btn, map){
                L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');
                LAM.mapClickMode = MapClickMode.ZoomTo;
            }).addTo( this.map );

            L.easyButton('fa-copy', function(btn, map){
                L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');
                LAM.mapClickMode = MapClickMode.CopyPosition;
            }).addTo( this.map );
        }

        initializeUI() {
            for(let content in ContentTypeEnum) {
                $('#' + ContentTypeEnum[content]).hide();

                let contentToggle = $('#' + ContentTypeEnum[content] + '_toggle');
                contentToggle.click({id: ContentTypeEnum[content]}, function(e) {
                    LAM.activateContent(e.data.id);
                });

                contentToggle.removeClass('active');
            }

            if(Constants.EditMode) {
                LAM.editor.initialize();
            } else {
                $('#la_editor').hide();
            }

            $('#copyTextModal-copy').click(function(e){
                $('#copyTextModal-text').select();
                document.execCommand("copy");
                $('#copyTextModal').modal('toggle');
            });
        }

        initializeSystems() {

            moment.tz.add([Constants.SeoulMomentTZ]);

            LAM.settings.initialize();

            // Initialize all areas before loading the markers
            for (let name in this.areas) {
                this.areas[name].initialize();
            }

            for (let name in this.areas) {
                this.areas[name].loadMarkers();

                if(this.activeArea === undefined) {
                    this.activateArea(name);
                }
            }

            LAM.treasureMapList.initialize();
            LAM.cards.initialize();
            LAM.crew.initialize();
            LAM.guide.initialize();
            LAM.faq.initialize();
            LAM.events.initialize();
            LAM.statistics.initialize();
            LAM.changeLog.initialize();

            // Search needs to initialize after all content is complete
            LAM.search.initialize();

            feather.replace();
        }

        initialize() {

            this.initializeMap();
            this.initializeUI();

            $.urlParam = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results === null) {
                    return undefined;
                }

                return decodeURI(results[1]) || 0;
            };

            this.initializeSystems();

            this.processUrlParameters();

            $( "#loading-page" ).delay(200).fadeOut(200, function(){
                $( "#main-page" ).fadeIn(200, function () {
                    LAM.postLoad();
                });
            });

            window.requestAnimationFrame(LAM.updateFrame);
        }

        postLoad(){
            this.map.invalidateSize();

            let loadTime = Math.round((Date.now() - LAM.settings.createTime) / 10) / 100;
            console.log('Load Complete in ' + loadTime + 's');

            if(this.settings.loadedVersion < Constants.SettingsVersion) {
                LAM.changeLog.showWhatChangedSince(this.settings.loadedVersion);
            }
        }

        updateFrame(time) {
            let delta = time - LAM.lastUpdateTime;
            if (delta > 1000 / (Constants.FPS || 10)) {
                LAM.update(delta);
                LAM.lastUpdateTime = time;
            }

            window.requestAnimationFrame(LAM.updateFrame);
        }

        update(delta) {
            for (let name in this.intervals) {
                let interval = this.intervals[name];
                interval.e += delta;
                if (interval.e > interval.d) {
                    interval.c(this, interval.e / 1000, interval.data);
                    interval.e = 0;
                }
            }
        }

        processUrlParameters() {
            let content = $.urlParam('c');
            if (content === undefined) {
                this.activateArea('World');
                this.map.setView(this.areas[this.activeArea].getCenterCoordinates(), 1);
                return;
            }

            switch (content) {
                case ContentTypeEnum.AreaMap: {
                    let area = $.urlParam('a');
                    let x = $.urlParam('x');
                    let y = $.urlParam('y');
                    let zoom = $.urlParam('z');
                    let markerId = $.urlParam('mid');
                    if (area === undefined || x === undefined || y === undefined) {
                        return;
                    }

                    area = area.replace(/_/g, ' ');

                    this.activateArea(area);
                    this.gotoMapArea([x, y], area, zoom);

                    if(markerId === undefined) {
                        this.activeMarkerLayer.createMarker({
                            x: x,
                            y: y,
                            type: MarkerTypeEnum.TargetMark,
                            title: area + ' ' + ToMapPrecision(x) + ' x ' + ToMapPrecision(y),
                            isGenerated: true
                        });
                    }

                    break
                }

                case ContentTypeEnum.Search: {
                    this.activateContent(content);

                    let searchText = $.urlParam('t');
                    if(searchText !== undefined){
                        searchText = searchText.replace(/_/g, ' ');

                        $('#searchField').val(searchText);
                        this.search.execSearch(searchText);
                    }

                    break
                }

                default: {
                    this.activateContent(content);
                    break
                }
            }
        }

        gotoMapArea(coordinates, customArea, customZoomLevel) {
            if(coordinates === undefined){
                return;
            }

            let area = customArea || this.activeArea;
            let zoomLevel = customZoomLevel || this.map.getZoom();
            let areaMaxZoomLevel = this.areas[area].zoomLevel;

            // Ensure we have a valid zoom level
            if(zoomLevel > areaMaxZoomLevel || zoomLevel === undefined){
                zoomLevel = areaMaxZoomLevel;
            }

            // Ensure we don't link too far zoomed out
            if(customZoomLevel === undefined && zoomLevel < areaMaxZoomLevel - 1){
                zoomLevel = areaMaxZoomLevel - 1;
            }

            let isDelayed = this.activeArea !== area;
            this.activateArea(area);
            this.gotoMapPosition(coordinates, zoomLevel, isDelayed);
        }

        gotoMapPosition(coordinates, zoomLevel, delayed) {
            if(delayed === true) {
                this.createInterval('GotoMapArea', function (e, delta, data) {
                    LAM.removeInterval('GotoMapArea');
                    LAM.map.flyTo(data.coordinates, data.zoomLevel, {
                        duration: 0.5
                    });
                }, 500, {
                    coordinates: coordinates,
                    zoomLevel: zoomLevel
                });
            } else {
                this.map.setView(coordinates, zoomLevel);
            }
        }

        activateContent(type) {
            if(this.activeContent !== undefined) {
                $('#' + this.activeContent).hide();
                $('#' + this.activeContent + '_toggle').removeClass('active');

                if(this.activeContent === ContentTypeEnum.AreaMap && this.activeArea !== undefined) {
                    this.areas[this.activeArea].deactivate();
                }
            }

            this.activeContent = type;
            $('#' + type).show();

            $('#' + type + '_toggle').addClass('active');

            if(this.activeContent === ContentTypeEnum.AreaMap) {
                this.map.invalidateSize();
            }
        }

        registerArea(name, entry) {
            this.areas[name] = entry;

            console.log("Registered Area " + name);

            $('#createLayerForm-targetArea').append($('<option>' + name + '</option>'));
        }

        activateArea(name) {
            this.activateContent(ContentTypeEnum.AreaMap);

            if(this.activeArea !== undefined) {
                this.areas[this.activeArea].deactivate();
            }

            this.areas[name].activate();
            this.activeArea = name;
        }

        centerCurrentAreaView(delayed){
            if(this.activeArea === undefined) {
                return;
            }

            this.gotoMapPosition(this.areas[this.activeArea].getCenterCoordinates(), 1, delayed);
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
                    iconSize: [30, 30],
                    className: "ov-marker"});
                this.markerIcons[markerType] = result;
            }

            return result;
        }

        getMapTileUrl(path) {
            return function(o) {
                var url = path;
                var zoom = o.z;
                if (o.x < 0 || o.x >= Math.pow(2, zoom) ||
                    o.y < 0 || o.y >= Math.pow(2, zoom)) {
                    return path + '/../blank.png';
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

        getZoneType(area, zone) {
            let areaData = this.areas[area];
            if(areaData === undefined){
                return undefined;
            }

            return areaData.getZoneType(zone);
        }

        getAreaMarkerLayer(area) {
            let areaData = this.areas[area];
            if(areaData === undefined) {
                return undefined;
            }

            return areaData.markerLayer;
        }

    }

    return new LostArkMap();

})();