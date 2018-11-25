(function(){

    let area = LAM.createArea("Yudia", {
        kr: "유디아",
        path: "maps/areas/Yudia",
        zoomLevel: 4
    });

    area.registerMap("Saland Hills", {
        kr: "살란드 구릉지",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Ozhorn Hills", {
        kr: "오즈혼 구릉지",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Sapira Cave", {
        kr: "사피라 동굴",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Morai Ruins", {
        kr: "모라이 유적",
        type: MapTypeEnum.Dungeon
    });

})();