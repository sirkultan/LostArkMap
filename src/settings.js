(function(){

    const autoSave = function(){
        LAM.settings.save();
    };

    class LostArkSettings {

        constructor() {
            // Volatile settings, not saved
            this.showWhatsChangedDialog = false;
            this.awayTime = undefined;
        }

        initialize() {
            this.load();

            LAM.createInterval("Auto-save", autoSave, 5000);
        }

        load() {
            let rawData = localStorage.getItem(Constants.SettingsKey);
            if(rawData === undefined) {
                return;
            }

            let data = JSON.parse(rawData);
            if(data === undefined){
                return;
            }

            if(data.version === undefined || data.version < Constants.SettingsVersion) {
                this.showWhatsChangedDialog = true;
                console.log("Returning!");
            }

            if(data.lastVisited !== undefined) {
                this.awayTime = (Date.now() - data.lastVisited) / 1000;
            }
        }

        save() {
            let data = {
                version: Constants.SettingsVersion,
                lastVisited: Date.now()
            };

            localStorage.setItem(Constants.SettingsKey,JSON.stringify(data));
        }


    }

    LAM.settings = new LostArkSettings();

})();