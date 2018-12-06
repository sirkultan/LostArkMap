(function(){

    class LostArkLocalization {

        constructor() {
            this.lang = LocalizationLanguage.English;
        }

        initialize() {
        }

        setLanguage(newLang, updateUI) {
            if(newLang === undefined || newLang === this.lang){
                return;
            }

            console.log("Language set to " + newLang);
            this.lang = newLang;

            if(updateUI === true) {
                $('#langSelect').selectpicker('val', this.lang);
            }

            this.refresh();
        }

        refresh() {
            let elements = $('.' + Constants.LocalizedTextClass);
            elements.each(function(e){
                LAM.loc.refreshElement($(this));
            });
        }

        refreshElement(element){
            let originalText = element.data('ot');
            let text = element.text();

            if(text === undefined) {
                return;
            }

            if(originalText === undefined) {
                element.data('ot', text);
            } else {
                text = originalText;
            }

            element.text(this.getLocalized(text));
        }

        getLocalizedTextElement(text) {
            return '<span class="' + Constants.LocalizedTextClass + '">' + text + '</span>';
        }

        getLocalized(text) {
            if (text === undefined
                || typeof text !== 'string'
                || text.startsWith('xx_')) {
                return text;
            }

            switch (this.lang) {
                case LocalizationLanguage.English: {
                    return text;
                }
            }

            if(LAM.locData[this.lang] === undefined) {
                return text;
            }

            let localized = LAM.locData[this.lang][text];
            if(localized === undefined){
                return text;
            }

            return localized;
        }

        registerLocalized(lang, src, localized) {
            if(LAM.locData[lang] === undefined
                || src === undefined
                || localized === undefined
                || src === localized) {
                return;
            }

            let existing = LAM.locData[lang][src];
            if(existing !== undefined) {
                console.error("Localization Duplicate: " + src + ' == ' + existing + ' --> ' + localized)
                return;
            }

            console.log('LOC_REGISTER: ' + src + ' --> ' + localized);
            LAM.locData[lang][src] = localized;
        }
    }

    LAM.locData = {};
    LAM.loc = new LostArkLocalization();

    $(document).ready(function() {
        $('#langSelect').on('changed.bs.select', function(){
            LAM.loc.setLanguage($(this).selectpicker('val'));
        });

        // Call a single refresh after document ready
        window.setTimeout(function() {LAM.loc.refresh();}, 200);
    });

})();

let _L = function(e) {
    return LAM.loc.getLocalized(e);
};