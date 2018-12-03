(function(){

    const TimerCallback = function(source, delta) {
        LAM.events.update(delta);
    };

    class LostArkEvents {

        constructor() {
            this.entries = {};
            this.nextEntryId = 0;
        }

        initialize() {
            this.initializeUI();

            LAM.createInterval('events', TimerCallback, 500);

            this.refreshEvents();
        }

        initializeUI() {
        }

        refreshEvents() {
            // Island Entry Events:
            for(let island in LAM.areas['Islands'].maps) {
                let islandData = LAM.areas['Islands'].maps[island];
                if(islandData.meta === undefined
                || islandData.meta.entryTimes === undefined) {
                    continue;
                }

                for(let i in islandData.meta.entryTimes) {
                    this.createEvent({
                        type: EventsEventEnum.IslandEntry,
                        title: island + ' Entry',
                        time: islandData.meta.entryTimes[i],
                        recurring: true
                    });
                }
            }
        }

        update(delta) {
            let time = moment();
            this.updateTime('time-local', time);

            let serverTime = moment().tz(Constants.SeoulMomentTZName);
            this.updateTime('time-server', serverTime);

            for(let eventId in this.entries) {
                this.updateEvent(eventId, delta);
            }
        }

        removeEvent(id) {
            let eventData = this.entries[id];

            delete(this.entries[id]);
        }

        updateEvent(id, delta) {
            let eventData = this.entries[id];

            // TODO
            eventData.time -= delta;

            let countdownTime = moment().startOf('day').add(eventData.time, 's');
            this.updateTime('gev-' + eventData.id, countdownTime);
        }

        createEvent(eventData) {
            eventData.id = this.nextEntryId++;

            let seoulTime = moment().tz(Constants.SeoulMomentTZName).startOf('day').add(eventData.time, 's');
            let currentTime = moment();

            eventData.time = (seoulTime.utc() - currentTime.utc()) / 1000;
            if(eventData.time <= 0) {
                // Event is already in the past for today
                return;
            }

            let localTime = moment().add(eventData.time, 's');

            let a = '<div class="col-xl-3 col-lg-6 col-12" id="gev-' + eventData.id + '"><div class="card"><div class="card-content"><div class="card-body"><div class="media d-flex">';
            let icon = '<div class="align-self-center"><img class="eventsIcon" src="images/icons/' + eventData.type + '"/></div>';
            let text = '<div class="media-body text-right"><h3>';
            text = text +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-hours">99</span></a> :' +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-min">99</span></a> :' +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-sec">99</span></a>' +
                '</h3><span>' + eventData.title + '</span><span><br>' + localTime.format('HH:mm:ss') + '</span></div>';
            let b = '</div></div></div></div></div>';

            $('#eventsContent').append($(a + icon + text + b));

            this.entries[eventData.id] = eventData;
        }

        updateTime(elementId, time){
            $('#' + elementId + '-hours').text(time.format('HH'));
            $('#' + elementId + '-min').text(time.format('mm'));
            $('#' + elementId + '-sec').text(time.format('ss'));
        }
    }

    LAM.events = new LostArkEvents();

})();