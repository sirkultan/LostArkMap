(function(){

    let area = LAM.createArea("Yudia", {
        path: "maps/areas/Yudia",
        zoomLevel: 4,
        bounds: [[0,0], [-500, 500]]
    });

    area.registerMap("Saland Hills", {
        type: MapTypeEnum.Continent,
        bounds: [[-270, 367], [-480, 520]]
    });

    area.registerMap("Ozhorn Hills", {
        type: MapTypeEnum.Continent,
        bounds: [[-24, 126], [-273, 460]]
    });

    area.registerMap("Sapira Cave", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-138, 6], [-270, 124]]
    });

    area.registerMap("Morai Ruins", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-327, 265], [-470, 355]]
    });

})();