(function(){

    class LostArkGuide {

        constructor() {
            this.entries = [];
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {
            if(LAM.faqData === undefined) {
                return;
            }

            let faqContainer = $('#faqContent');
            faqContainer.empty();

            for(let i in LAM.faqData) {
                let faqData = LAM.faqData[i];

                let elementId = 'faq_' + i;
                let faqElement = $('<div class="card"></div>');

                let faqContent = $('<div class="card-header"></div>');
                faqElement.append(faqContent);

                let faqQuestion = $('<a class="card-link" data-toggle="collapse" href="#collapse' + elementId + '">' + faqData.q + '</a>');
                faqContent.append(faqQuestion);

                let faqAnswer = $('<div id="collapse' + elementId + '" class="collapse show" data-parent="#faqContent"></div>');
                faqContent.append(faqAnswer);

                if(faqData.img !== undefined) {
                    faqAnswer.append($('<table><tr><td><img class="faqImage" src="' + faqData.img +'"</td><td class="card-body">'+faqData.a+'</td></tr></table>'))
                } else {
                    faqAnswer.append($('<div class="card-body">' + faqData.a + '</div>'));
                }

                faqContainer.append(faqElement);

                this.entries.push(faqData);
            }

            $('.collapse').collapse();
        }
    }

    LAM.faq = new LostArkGuide();

})();