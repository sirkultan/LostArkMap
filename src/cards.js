(function(){

    class LostArkCards {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;
            this.count = 0;
            this.filter = {
                rarity: undefined,
                element: undefined,
                cost: undefined,
                offense: undefined,
                health: undefined
            }
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {

            $('#cardsFilter').collapse('hide');

            if(LAM.cardData === undefined) {
                return;
            }

            let cardContainer = $('#content_cards_list');
            cardContainer.empty();

            LAM.cardData.sort(function(a, b){
                if(a.grade > b.grade){
                    return -1;
                }

                if(b.grade > a.grade){
                    return 1;
                }

                return 0;
            });

            for(let i in LAM.cardData) {
                let cardData = LAM.cardData[i];
                cardData.id = this.nextEntryId++;
                cardData.rarity = cardData.grade - 1;

                let a = '<div class="col-sm-6" id="card-' + cardData.id + '"><div class="card border-rarity-' + cardData.rarity + '"><div class="card-content"><div class="card-body"><div class="media d-flex">';

                let img = 'images/cards/' + this.getImagePathForRarity(cardData.rarity) + '/' + cardData.img;
                let icon = '<div class="align-self-center"><img class="cardIcon" src="' + img + '"/></div>';

                let text = '<div class="media-body"><h4 class="text-center">' + cardData.name + '</h4>';
                text = text + '<table class="table">';
                text = text + '<tr><td class="cardStatLabel">Cost</td><td class="cardStatValue">' + cardData.cost + '</td></tr>';
                text = text + '<tr><td class="cardStatLabel">Offense</td><td class="cardStatValue">' + cardData.offense + '</td></tr>';
                text = text + '<tr><td class="cardStatLabel">Health</td><td class="cardStatValue">' + cardData.health + '</td></tr>';
                let b = '</div></table></div></div></div></div></div>';

                this.entries[cardData.id] = cardData;

                cardContainer.append($(a + icon + text + b));
                this.count++;
            }

            /*for(let i in LAM.guideData) {
                let guideData = LAM.guideData[i];

                let guideElement = $('<div class="col-sm" >' +
                    '<div class="card mb-4 shadow-sm" style="width: 250px;">' +
                    '<img class="card-img-top" src="images/guides/'+ guideData.preview +'" style="width: 230px; height: 230px;" />' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + guideData.title + '</p>' +
                    '<div class="d-flex justify-content-between align-items-center">' +
                    '<div class="btn-group">' +
                    '<a role="button" class="btn btn-sm btn-outline-secondary" href="' + guideData.url +'" target="_blank">Show</a>' +
                    '</div></div></div></div></div>');

                guideContainer.append(guideElement);

                guideData.id = this.nextEntryId++;
                this.entries[guideData.id] = guideData;
            }*/
        }

        getImagePathForRarity(rarity){
            switch (rarity) {
                case RarityEnum.Normal: return 'common';
                case RarityEnum.Uncommon: return 'uncommon';
                case RarityEnum.Rare: return 'rare';
                case RarityEnum.Epic: return 'epic';
                case RarityEnum.Legendary: return 'legendary';

                default: {
                    console.error("Invalid Card Rarity: " + rarity);
                }
            }
        }

        setFilter(key, value) {
            this.filter[key] = value;

            this.applyFilter();
        }

        applyFilter(){
            for(let id in this.entries) {
                let cardData = this.entries[id];

                if(this.matchesFilter(cardData) === true) {
                    $('#card-' + id).fadeIn();
                } else {
                    $('#card-' + id).fadeOut();
                }
            }
        }

        matchesFilter(cardData) {
            if(this.filter.rarity !== undefined
                && cardData.rarity !== this.filter.rarity) {
                return false;
            }

            if(this.filter.element !== undefined
                && cardData.attr !== this.filter.element) {
                return false;
            }

            if(this.filter.cost !== undefined) {
                if(this.filter.cost === 'ltavg' && cardData.cost > 3) {
                    return false;
                }

                if(this.filter.cost === 'gtavg' && cardData.cost < 5) {
                    return false;
                }
            }

            if(this.filter.offense !== undefined) {
                if(this.filter.offense === 'gtoff1' && cardData.offense < 4) {
                    return false;
                }

                if(this.filter.offense === 'gtoff2' && cardData.offense < 7) {
                    return false;
                }
            }

            if(this.filter.health !== undefined) {
                if(this.filter.health === 'gthp1' && cardData.health < 20) {
                    return false;
                }

                if(this.filter.health === 'gthp2' && cardData.health < 30) {
                    return false;
                }

                if(this.filter.health === 'gthp3' && cardData.health < 40) {
                    return false;
                }
            }

            return true;
        }
    }

    $(document).ready(function() {

        InitFilterBtn('btn-filter-card-', 'rarity', function(id, val) { LAM.cards.setFilter(id, val); });
        InitFilterBtn('btn-filter-card-', 'element', function(id, val) { LAM.cards.setFilter(id, val); });
        InitFilterBtn('btn-filter-card-', 'cost', function(id, val) { LAM.cards.setFilter(id, val); });
        InitFilterBtn('btn-filter-card-', 'offense', function(id, val) { LAM.cards.setFilter(id, val); });
        InitFilterBtn('btn-filter-card-', 'health', function(id, val) { LAM.cards.setFilter(id, val); });

    });

    LAM.cards = new LostArkCards();

})();