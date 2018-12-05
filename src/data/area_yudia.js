(function(){

    let area = LAM.createArea("Yudia", {
        kr: "유디아",
        path: "maps/areas/Yudia",
        zoomLevel: 4,
        bounds: [[0,0], [-500, 500]]
    });

    area.registerMap("Saland Hills", {
        kr: "살란드 구릉지",
        type: MapTypeEnum.Continent,
        bounds: [[-270, 367], [-480, 520]]
    });

    area.registerMap("Ozhorn Hills", {
        kr: "오즈혼 구릉지",
        type: MapTypeEnum.Continent,
        bounds: [[-24, 126], [-273, 460]]
    });

    area.registerMap("Sapira Cave", {
        kr: "사피라 동굴",
        type: MapTypeEnum.Dungeon,
        bounds: [[-138, 6], [-270, 124]]
    });

    area.registerMap("Morai Ruins", {
        kr: "모라이 유적",
        type: MapTypeEnum.Dungeon,
        bounds: [[-327, 265], [-470, 355]]
    });

})();