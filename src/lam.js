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
            this.copyLocationMode = false;
            this.intervals = [];
            this.lastUpdateTime = 0;
        }

        createInterval(name, callback, delay) {
            this.intervals[name] = {c: callback, d: delay, e: 0}
        }

        onMapClick(e) {
            let x = e.latlng.lat;
            let y = e.latlng.lng;

            if (this.copyLocationMode === true) {
                console.log('[' + x + ', ' + y + ']');
                L.DomUtil.removeClass(LAM.map._container,'crosshair-cursor-enabled');
                this.showCopyLinkDialog(this.getMapLink(x, y), "Copy Location");
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

            return "?c=" + ContentTypeEnum.AreaMap + "&a=" + area.replace('/\s/g', '_') + '&x=' + x + '&y=' + y + '&z=' + zoomLevel;
        }

        initialize() {

            this.map = L.map('la_map', {
                crs: L.CRS.Simple,
                minZoom: 0});

            this.map.setView([0, 0], 1);

            LAM.map.on("click", function(e) {
                LAM.onMapClick(e);
            });

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

            feather.replace();

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

            $('.hard-map-link').on('click', function () {
                let area = $(this).data('area');
                let position = [$(this).data('tx'), $(this).data('ty')];
                let zoom = $(this).data('zoom');

                LAM.gotoMapArea(position, area, zoom);
            });

            L.easyButton('fa-crosshairs', function(btn, map){
                //helloPopup.setLatLng(map.getCenter()).openOn(map);
                L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');
                LAM.copyLocationMode = true;
            }).addTo( this.map );

            moment.tz.add([Constants.SeoulMomentTZ])

            LAM.guide.initialize();
            LAM.faq.initialize();
            LAM.calendar.initialize();
            LAM.settings.initialize();
            LAM.statistics.initialize();

            // Search needs to initialize after all content is complete
            LAM.search.initialize();

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
                this.showWhatChangedSince(this.settings.loadedVersion);
            }
        }

        showWhatChangedSince(fromVersion){
            if(this.updateData === undefined){
                return;
            }

            let contentElement = $('#changeLogContent');

            let hasContent = false;
            for(let ver = fromVersion + 1; ver <= Constants.SettingsVersion; ver++) {
                let versionData = this.updateData[ver];
                if(versionData === undefined
                    || versionData.e === undefined
                    || versionData.e.length === 0) {
                    continue;
                }

                let versionElement = $('<div></div>');
                versionElement.append($('<h3>Version ' + versionData.n + '</h3>'));

                let list = $('<ul></ul>');
                versionElement.append(list);

                for(let i in versionData.e) {
                    list.append($('<li>' + versionData.e[i] + '</li>'));
                }

                contentElement.prepend(versionElement);

                hasContent = true;
            }

            if(hasContent === true) {
                $('#changelogModal').modal();
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
                let data = this.intervals[name];
                data.e += delta;
                if (data.e > data.d) {
                    data.c(this, data.e / 1000);
                    data.e = 0;
                }
            }
        }

        processUrlParameters() {
            let content = $.urlParam('c');
            if (content === undefined) {
                this.activateArea('World');
                this.gotoMapArea([-250, 250], undefined, 1);
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

            this.activateArea(area);
            this.map.setView(coordinates, zoomLevel);
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