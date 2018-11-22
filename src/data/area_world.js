(function() {

    let area = LAM.createArea("World", {
        kr: "항해",
        path: "maps/areas/World",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World
    });


}());