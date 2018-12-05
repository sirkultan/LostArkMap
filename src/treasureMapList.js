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
            let locationLink = "?c=" + ContentTypeEnum.AreaMap + "&a=" + markerData.area + '&x=' + markerData.x + '&y=' + markerData.y + '&z=' + zoomLevel;
            let elementText = '<div class="card treasure-map-card" style="margin: 8px" ' + filterData + '>' +
                '<img class="card-img-top" src="images/marker_hints/'+ markerData.hintImage +'" style="width: 180px; height: 228px;"/>' +
                '<div><p class="card-text">';
            if(markerData.zone !== undefined) {
                elementText = elementText + markerData.zone + '<br>';
            }

            elementText = elementText + '<b>' + markerData.area + '</b></p>';

            if(markerData.hintText !== undefined) {
                elementText = elementText + '<p class="small" style="width: 180px;">' + markerData.hintText + '</p>';
            }

            elementText = elementText + '<a role="button" class="btn btn-sm btn-outline-secondary" href="' + locationLink + '">Show</a>' +
                '</div></div>';

            $('#content_treasure_map_list').append($(elementText));
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
    }

    $(document).ready(function() {

        InitFilterBtn('btn-filter-map-', 'rarity', function(id, val) { LAM.treasureMapList.setFilter(id, val); });
        InitFilterBtn('btn-filter-map-', 'land', function(id, val) { LAM.treasureMapList.setFilter(id, val); });
        InitFilterBtn('btn-filter-map-', 'area', function(id, val) { LAM.treasureMapList.setFilter(id, val); });

        $('#treasureMapFilter').collapse('hide');

    });

    LAM.treasureMapList = new LostArkTreasureMapList();

})();