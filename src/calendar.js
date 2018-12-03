(function(){

    const TimerCallback = function(source, delta) {
        LAM.calendar.update(delta);
    };

    class LostArkCalendar {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;

            this.localTimeHours = undefined;
            this.localTimeMin = undefined;
            this.localTimeSec = undefined;

            this.serverTimeHours = undefined;
            this.serverTimeMin = undefined;
            this.serverTimeSec = undefined;
        }

        initialize() {
            this.initializeUI();

            LAM.createInterval('calendar', TimerCallback, 500);
        }

        initializeUI() {
            this.localTimeHours = $('#time-local-hours');
            this.localTimeMin = $('#time-local-min');
            this.localTimeSec = $('#time-local-sec');

            this.serverTimeHours = $('#time-server-hours');
            this.serverTimeMin = $('#time-server-min');
            this.serverTimeSec = $('#time-server-sec');
        }

        update(delta) {
            let time = moment();
            this.localTimeHours.text(time.format('h'));
            this.localTimeMin.text(time.format('mm'));
            this.localTimeSec.text(time.format('ss a'));

            let serverTime = moment().tz(Constants.SeoulMomentTZName);
            this.serverTimeHours.text(serverTime.format('h'));
            this.serverTimeMin.text(serverTime.format('mm'));
            this.serverTimeSec.text(serverTime.format('ss a'));
        }
    }

    LAM.calendar = new LostArkCalendar();

})();