(function(){

    const TimerCallback = function(source, delta) {
        LAM.events.update(delta);
    };

    class LostArkEvents {

        constructor() {
            this.categories = {};
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
            /*let currentKRTimeInSec = (moment().tz(Constants.SeoulMomentTZName) - moment().tz(Constants.SeoulMomentTZName).startOf('day')) / 1000;
            this.createEvent({
                type: EventsEventEnum.Internal,
                description: 'Test Event',
                time: currentKRTimeInSec + 220
            });*/

            // Island Entry Events:
            for(let island in LAM.areas['Islands'].maps) {
                let islandData = LAM.areas['Islands'].maps[island];
                if(islandData.meta === undefined
                || islandData.meta.entryTimes === undefined) {
                    continue;
                }

                for(let i in islandData.meta.entryTimes) {
                    this.createEvent({
                        category: island,
                        type: EventsEventEnum.IslandEntry,
                        description: island + ' Entry',
                        showDescription: false,
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

            $.notify("Event: " + eventData.description,
                {
                    style: 'bootstrap',
                    position:'bottom-right',
                    autoHideDelay: 10000,
                    className:'info'
                });

            $('#gev-' + eventData.id).fadeOut(200, function() {
                $(this).remove();
            });

            delete(this.entries[id]);
        }

        updateEvent(id, delta) {
            let eventData = this.entries[id];

            // TODO
            eventData.time -= delta;
            if(eventData.time <= 0) {
                this.removeEvent(id);
                return;
            }

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

            let a = '<div class="col-sm-4" id="gev-' + eventData.id + '"><div class="card"><div class="card-content"><div class="card-body"><div class="media d-flex">';
            let icon = '<div class="align-self-center"><img class="eventsIcon" src="images/icons/' + eventData.type + '"/></div>';
            let text = '<div class="media-body text-right"><h3>';
            text = text +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-hours">99</span></a> :' +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-min">99</span></a> :' +
                '<a><span class="badge eventCountdown" id="gev-' + eventData.id + '-sec">99</span></a></h3>';
            if(eventData.description !== undefined && eventData.showDescription !== false) {
                text = text + '<div>' + eventData.description + '</div>';
            }

            text = text + '<span>' + localTime.format('HH:mm:ss') + '</span></div>';
            let b = '</div></div></div></div></div>';

            let finalElement = $(a + icon + text + b);
            let categoryId;
            let categoryTitle;
            if(eventData.category === undefined) {
                categoryId = '----';
                categoryTitle = 'Misc';
            } else {
                categoryId = eventData.category.toLocaleLowerCase().replace(' ', '_');
                categoryTitle = eventData.category;
            }

            let categoryParent = this.categories[categoryId];
            if(categoryParent === undefined){
                let categoryContent = $('<div class="row" id="gev-category-' + categoryId + '"></div>');
                categoryContent.append(finalElement);

                categoryParent = $('<div><h5 class="eventCategory">' + categoryTitle + '</h5></div>');
                categoryParent.append(categoryContent);

                $('#eventsContent').append(categoryParent);

                this.categories[categoryId] = categoryParent;
            } else {
                $('#gev-category-' + categoryId).append(finalElement);
            }

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