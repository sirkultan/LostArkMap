(function () {

    let nextDynamicLayerId = 1;

    class DynamicLayer {

        constructor(name, data) {
            this.name = name;
            this.id = nextDynamicLayerId++;
            this.isVisible = true;

            LAM.registerDynamicLayer(this);

            this.initializeUI();
        }

        initializeUI() {
            // Create the navigation link
            let element = $('<li class="nav-item"></li>');

            this.activateLink = $('<a class="nav-link" href="#"></a>');
            this.activateLink.html('<span data-feather="layers"></span>' + this.name);

            this.activateLink.click({id: this.id}, function(e) {
                LAM.activateDynamicLayer(e.data.id);
            });

            element.append(this.activateLink);

            $('#dynamicLayerNav').append(element);

            feather.replace();
        }

        toggleVisible() {

        }
    }

    LAM.createDynamicLayer = function(name, data){
        return new DynamicLayer(name, data);
    }

}());