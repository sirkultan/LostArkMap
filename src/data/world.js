(function() {

    let area = LAM.createArea("World", {
        kr: "항해",
        path: "maps/World",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World
    });


}());