(function(){

    const autoSave = function(){
        LAM.settings.save();
    };

    class LostArkSettings {

        constructor() {
            // Volatile settings, not saved
            this.loadedVersion = 0;
            this.awayTime = undefined;
            this.createTime = Date.now();
        }

        initialize() {
            this.load();

            LAM.createInterval("Auto-save", autoSave, 5000);
        }

        load() {
            let rawData = localStorage.getItem(Constants.SettingsKey);
            if(rawData === undefined || rawData === null) {
                return;
            }

            let data = JSON.parse(rawData);
            if(data === undefined || data === null) {
                return;
            }

            this.loadedVersion = data.version;

            if(data.lastVisited !== undefined) {
                this.awayTime = (Date.now() - data.lastVisited) / 1000;
            }

            if(data.lang !== undefined) {
                LAM.loc.setLanguage(data.lang, true);
            }
        }

        save() {
            let data = {
                version: Constants.SettingsVersion,
                lastVisited: Date.now(),
                lang: LAM.loc.lang
            };

            localStorage.setItem(Constants.SettingsKey,JSON.stringify(data));
        }


    }

    LAM.settings = new LostArkSettings();

})();