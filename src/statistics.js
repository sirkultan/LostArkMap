(function(){

    class LostArkStatistics {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;
            this.suspendUpdate = true;
        }

        initialize() {
            this.initializeUI();

            this.suspendUpdate = false;
            this.rebuildStats();
        }

        initializeUI() {

            let cardPanel = $('#statisticsCardPanel');
            cardPanel.empty();

            this.addStatPanel({
                id: 'cards',
                icon: 'stat-cards.svg',
                value: LAM.cards.count,
                title: 'Cards'
            });

            for (let typeName in MarkerTypeEnum) {
                let markerImage = MarkerTypeEnum[typeName];
                switch (markerImage) {
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

                this.addStatPanel({
                    id: typeName,
                    icon: markerImage,
                    value: 0,
                    title: MarkerTypeDefaultTitle(markerImage)
                });
            }
        }

        addStatPanel(data) {
            if(data.id === undefined) {
                data.id = this.nextEntryId++;
            }

            let a = '<div class="col-sm-4"><div class="card"><div class="card-content"><div class="card-body"><div class="media d-flex">';
            let icon = '<div class="align-self-center"><img class="statisticsIcon" src="images/icons/' + data.icon + '"/></div>';
            let text = '<div class="media-body text-right"><h3 id="stat-value-' + data.id + '">' + data.value + '</h3><span>' + data.title + '</span></div>';
            let b = '</div></div></div></div></div>';

            this.entries[data.id] = data;
            $('#statisticsCardPanel').append($(a + icon + text + b));
        }

        rebuildStats() {
            if(this.suspendUpdate !== false) {
                return;
            }

            let markerStats = {};
            for (let name in LAM.areas) {
                let area = LAM.areas[name];
                for (let i in area.markerLayer.markers) {
                    let markerData = area.markerLayer.markers[i];
                    if (markerStats[markerData.type] === undefined) {
                        markerStats[markerData.type] = 0;
                    }

                    markerStats[markerData.type]++;
                }
            }

            for (let typeName in MarkerTypeEnum) {
                if(this.entries[typeName] === undefined) {
                    continue;
                }

                let markerImage = MarkerTypeEnum[typeName];
                let markerCount = markerStats[markerImage];
                if(markerCount === undefined) {
                    markerCount = 0;
                }

                $('#stat-value-' + typeName).text(markerCount);
            }
        }
    }

    LAM.statistics = new LostArkStatistics();

})();