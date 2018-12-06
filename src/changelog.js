(function(){

    class LostArkChangelog {

        constructor() {
        }

        initialize() {
            this.initializeUI();
        }

        initializeUI() {
            if(LAM.updateData === undefined) {
                return;
            }

            let changeLogRoot = $('#content_changelog');
            changeLogRoot.empty();

            for(let ver in LAM.updateData){
                let versionData = LAM.updateData[ver];
                if(versionData === undefined
                    || versionData.e === undefined
                    || versionData.e.length === 0) {
                    continue;
                }

                changeLogRoot.prepend(this.buildVersionElement(versionData, true));
            }
        }

        showWhatChangedSince(fromVersion){
            if(LAM.updateData === undefined){
                return;
            }

            let contentElement = $('#changeLogContent');

            let hasContent = false;
            for(let ver = fromVersion + 1; ver <= Constants.SettingsVersion; ver++) {
                let versionData = LAM.updateData[ver];
                if(versionData === undefined
                    || versionData.e === undefined
                    || versionData.e.length === 0) {
                    continue;
                }

                contentElement.prepend(this.buildVersionElement(versionData));

                hasContent = true;
            }

            if(hasContent === true) {
                $('#changelogModal').modal();
            }
        }

        buildVersionElement(versionData, showDate) {
            let versionElement = $('<div></div>');

            let headerText = 'Version ' + versionData.n;
            if(showDate === true) {
                headerText = '[' + versionData.d + '] ' + headerText;
            }

            versionElement.append($('<h3>' + headerText + '</h3>'));

            let list = $('<ul></ul>');
            versionElement.append(list);

            for(let i in versionData.e) {
                list.append($('<li>' + versionData.e[i] + '</li>'));
            }

            return versionElement;
        }
    }

    LAM.changeLog = new LostArkChangelog();

})();