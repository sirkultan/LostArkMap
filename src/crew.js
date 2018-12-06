(function(){

    class LostArkCrew {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;
            this.count = 0;
            this.filter = {
                rarity: undefined,
            }
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {

            $('#crewFilter').collapse('hide');

            if(LAM.crewData === undefined) {
                return;
            }

            let crewContainer = $('#content_crew_list');
            crewContainer.empty();

            LAM.crewData.sort(function(a, b){
                if(a.grade > b.grade){
                    return -1;
                }

                if(b.grade > a.grade){
                    return 1;
                }

                return 0;
            });

            for(let i in LAM.crewData) {
                let crewData = LAM.crewData[i];
                crewData.id = this.nextEntryId++;
                crewData.rarity = crewData.grade - 1;

                let a = '<div class="col-sm-6" id="crew-' + crewData.id + '"><div class="card border-rarity-' + crewData.rarity + '"><div class="card-content"><div class="card-body"><div class="media d-flex">';

                let img = 'images/crew/' + crewData.img;
                let icon = '<div class="align-self-center"><img class="crewIcon" src="' + img + '"/></div>';

                let text = '<div class="media-body"><h4 class="text-center">' + crewData.name + '</h4>';
                let b = '</div></div></div></div></div>';

                this.entries[crewData.id] = crewData;

                crewContainer.append($(a + icon + text + b));
                this.count++;
            }
        }

        setFilter(key, value) {
            this.filter[key] = value;

            this.applyFilter();
        }

        applyFilter(){
            for(let id in this.entries) {
                let crewData = this.entries[id];

                if(this.matchesFilter(crewData) === true) {
                    $('#crew-' + id).fadeIn();
                } else {
                    $('#crew-' + id).fadeOut();
                }
            }
        }

        matchesFilter(crewData) {
            if(this.filter.rarity !== undefined
                && crewData.rarity !== this.filter.rarity) {
                return false;
            }

            return true;
        }
    }

    $(document).ready(function() {

        InitFilterBtn('btn-filter-crew-', 'rarity', function(id, val) { LAM.crew.setFilter(id, val); });

    });

    LAM.crew = new LostArkCrew();

})();