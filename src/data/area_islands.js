(function(){

    let area = LAM.createArea("Islands", {
        kr: "섬",
        path: "maps/areas/Islands",
        zoomLevel: 7
    });

    // 0
    area.registerMap("All", {
        kr: "",
        type: MapTypeEnum.World,
        bounds: [[0, 0], [-700, 700]]
    });

})();