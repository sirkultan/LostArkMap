(function(){

    class LostArkGuide {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {
            if(LAM.guideData === undefined) {
                return;
            }

            let guideContainer = $('#content_guides_list');
            guideContainer.empty();

            for(let i in LAM.guideData) {
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
            }
        }
    }

    LAM.guide = new LostArkGuide();

})();