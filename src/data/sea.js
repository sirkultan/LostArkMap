(function() {

    let area = LAM.createArea("Sea", {
        kr: "항해",
        path: "maps/sea",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World
    });


}());