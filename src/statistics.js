(function(){

    class LostArkStatistics {

        constructor() {
            this.entries = {};
            this.sections = {};
            this.nextEntryId = 0;
            this.suspendUpdate = true;
        }

        initialize() {
            this.initializeUI();

            this.suspendUpdate = false;
            this.rebuildStats();
        }

        initializeUI() {

        }

        addStatSection(id, title) {
            let element = $('<div class="statisticsSection">' +
                '<h2 class="text-center">' + title + '</h2><br>' +
                '<div class="row statisticsContent" id="stat-section-' + id + '"></div></div><hr style="margin: 50px">');

            $('#content_statistics').append(element);
            this.sections[id] = element;
        }

        addStatPanel(data) {


            if(data.id === undefined) {
                data.id = this.nextEntryId++;
            }

            let a = '<div class="col-sm-4"><div class="card"><div class="card-content"><div class="card-body"><div class="media d-flex">';
            let icon = '<div class="align-self-center"><img class="statisticsIcon" src="images/icons/' + data.icon + '"/></div>';
            let text = '<div class="media-body text-right"><h3 id="stat-value-'  + data.section + '-' + data.id + '">' + data.value + '</h3><span>' + data.title + '</span></div>';
            let b = '</div></div></div></div></div>';

            this.entries[data.id] = data;
            let element = $(a + icon + text + b);
            $('#stat-section-' + data.section).append(element);
        }

        rebuildStats() {
            if(this.suspendUpdate !== false) {
                return;
            }

            $('#content_statistics').empty();
            this.addStatSection('content', 'Content');

            this.addStatPanel({
                id: 'cards',
                icon: 'stat-cards.svg',
                value: LAM.cards.count,
                title: 'Cards',
                section: 'content'
            });

            this.addStatPanel({
                id: 'crew',
                icon: 'stat-crew.svg',
                value: LAM.crew.count,
                title: 'Crew',
                section: 'content'
            });

            let markerStats = {};
            let markerAreaStats = {};
            for (let name in LAM.areas) {
                markerAreaStats[name] = {};
                let area = LAM.areas[name];
                for (let i in area.markerLayer.markers) {
                    let markerData = area.markerLayer.markers[i];

                    switch (markerData.type) {
                        // Ignore some markers
                        case MarkerTypeEnum.Internal:
                        case MarkerTypeEnum.Notice:
                        case MarkerTypeEnum.Zoning:
                        case MarkerTypeEnum.ZoningIslandPVP:
                        case MarkerTypeEnum.ZoningIsland:
                        case MarkerTypeEnum.ZoningIslandFlux:
                        case MarkerTypeEnum.ZoningWorld:
                        case MarkerTypeEnum.TargetMark:
                        case MarkerTypeEnum.SeaAreaAquatic:
                        case MarkerTypeEnum.SeaAreaDeath:
                        case MarkerTypeEnum.SeaAreaIce:
                        case MarkerTypeEnum.SeaAreaSandstorm:
                        case MarkerTypeEnum.SeaAreaSiren:
                        case MarkerTypeEnum.SeaAreaStorm: {
                            continue;
                        }
                    }

                    if (markerStats[markerData.type] === undefined) {
                        markerStats[markerData.type] = 0;
                    }

                    if(markerAreaStats[name][markerData.type] === undefined) {
                        markerAreaStats[name][markerData.type] = 0;
                    }

                    markerStats[markerData.type]++;
                    markerAreaStats[name][markerData.type]++;
                }
            }

            this.addStatSection('marker-all', 'Markers - All');
            for(let name in markerAreaStats) {
                this.addStatSection('marker-' + name.toLowerCase().replace(' ', '-'), 'Markers - ' + name);
            }

            let keys = Object.keys(markerStats).sort();
            for (let i in keys) {
                let type = keys[i];
                this.addStatPanel({
                    icon: type,
                    value: markerStats[type],
                    title: MarkerTypeDefaultTitle(type),
                    section: 'marker-all'
                });
            }

            for (let name in markerAreaStats) {
                keys = Object.keys(markerAreaStats[name]).sort();
                for (let i in keys) {
                    let type = keys[i];
                    this.addStatPanel({
                        icon: type,
                        value: markerAreaStats[name][type],
                        title: MarkerTypeDefaultTitle(type),
                        section: 'marker-' + name.toLowerCase().replace(' ', '-')
                    });
                }
            }
        }
    }

    LAM.statistics = new LostArkStatistics();

})();