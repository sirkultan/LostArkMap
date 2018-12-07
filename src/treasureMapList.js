(function(){

    class LostArkTreasureMapList {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;

            this.filter = {
                rarity: undefined,
                land: undefined,
                area: undefined
            }
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {
        }

        registerTreasureMap(markerData) {
            let zoomLevel = markerData.maxZoomLevel;
            if(zoomLevel === undefined) {
                zoomLevel = this.areas[markerData.area].zoomLevel;
            }

            let mapId = this.nextEntryId++;
            let filterData = '';

            // Rarity filter
            let filterValue = markerData.rarity;
            if(filterValue === undefined){
                filterValue = RarityEnum.Rare;
                console.log('Treasure Map has no rarity set: ' + markerData.id + ' @ ' + markerData.area);
            }

            filterData = filterData + 'data-tmrarity="' + GetKeyByValue(RarityEnum, filterValue) + '" ';

            // Area filter
            filterValue = markerData.tmArea;
            if(filterValue === undefined){
                filterValue = TreasureMapAreaFilter.Continent;
            }

            filterData = filterData + 'data-tmarea="' + filterValue + '" ';

            // Land filter
            filterValue = markerData.tmLand;
            if(filterValue === undefined){
                filterValue = TreasureMapLandFilterEnum.Normal;
            }

            filterData = filterData + 'data-tmland="' + filterValue + '" ';

            // Create the element
            let elementText = '<div class="card treasure-map-card" style="margin: 8px" ' + filterData + '>' +
                '<img class="card-img-top" src="images/marker_hints/'+ markerData.hintImage +'" style="width: 180px; height: 228px;"/>' +
                '<div><p class="card-text">';
            if(markerData.zone !== undefined) {
                elementText = elementText + '<span class="loc-txt">' + markerData.zone + '</span><br>';
            }

            elementText = elementText + '<b class="loc-txt">' + markerData.area + '</b></p>';

            if(markerData.hintText !== undefined) {
                elementText = elementText + '<p class="small loc-txt" style="width: 180px;">' + markerData.hintText + '</p>';
            }

            elementText = elementText + '<a role="button" class="btn btn-sm btn-outline-secondary treasure-map-link" href="#" data-target="' + mapId +'">Show</a></div></div>';

            $('#content_treasure_map_list').append($(elementText));

            this.entries[mapId] = markerData;
        }

        setFilter(key, value) {
            this.filter[key] = value;
            this.applyFilter();
        }

        applyFilter(){
            let cards = $('.treasure-map-card');
            cards.css('display', 'none');

            if(this.filter.rarity !== undefined) {
                cards = cards.filter('[data-tmrarity="' + this.filter.rarity + '"]');
            }

            if(this.filter.area !== undefined) {
                cards = cards.filter('[data-tmland="' + this.filter.area + '"]');
            }

            if(this.filter.land !== undefined) {
                cards = cards.filter('[data-tmarea="' + this.filter.land + '"]');
            }

            cards.fadeIn('slow');
        }

        showTreasureMap(id) {
            if(id === undefined) {
                return;
            }

            let markerData = this.entries[id];
            LAM.gotoMapArea([markerData.x, markerData.y], markerData.area);
        }
    }

    $(document).ready(function() {

        InitFilterBtn('btn-filter-map-', 'rarity', function(id, val) { LAM.treasureMapList.setFilter(id, val); });
        InitFilterBtn('btn-filter-map-', 'land', function(id, val) { LAM.treasureMapList.setFilter(id, val); });
        InitFilterBtn('btn-filter-map-', 'area', function(id, val) { LAM.treasureMapList.setFilter(id, val); });

        $('body').on('click', 'a.treasure-map-link', function() {
            let target = $(this).data('target');

            LAM.treasureMapList.showTreasureMap(target);
        });

        $('#treasureMapFilter').collapse('hide');

    });

    LAM.treasureMapList = new LostArkTreasureMapList();

})();