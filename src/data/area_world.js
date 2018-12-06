(function() {

    let area = LAM.createArea("World", {
        path: "maps/areas/World",
        zoomLevel: 5,
        bounds: [[0,0], [-450, 500]]
    });

    area.registerMap("Main", {
        type: MapTypeEnum.World,
        bounds: [[-39, -31], [-531, 545]]
    });


}());