(function() {

    let area = LAM.createArea("World", {
        kr: "항해",
        path: "maps/areas/World",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        type: MapTypeEnum.World,
        bounds: [[-39, -31], [-531, 545]]
    });


}());