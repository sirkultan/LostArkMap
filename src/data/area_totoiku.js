(function(){

    let area = LAM.createArea("Totoiku", {
        kr: "토토이크",
        path: "maps/areas/Totoiku",
        zoomLevel: 4
    });

    area.registerMap("Mokoko Village", {
        kr: "모코코 마을",
        type: MapTypeEnum.City,
        bounds: [[-390, 124], [-504, 249]]
    });

    area.registerMap("Rocky Forest", {
        kr: "성큼바위 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-255, 155], [-380, 227]]
    });

    area.registerMap("Ocean Scent Forest", {
        kr: "바다향기 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-385, 256], [-508, 383]]
    });

    area.registerMap("Sweet Forest", {
        kr: "달콤한 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-257, 269], [-380, 388]]
    });

    area.registerMap("Silent Giants Forest", {
        kr: "침묵하는 거인의 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-129, 146], [-257, 243]]
    });

    area.registerMap("Pirate Lair", {
        kr: "해적 소굴",
        type: MapTypeEnum.Dungeon,
        bounds: [[-124, 267], [-251, 384]]
    });

    area.registerMap("Totoiku's Body", {
        kr: "토토이크의 몸",
        type: MapTypeEnum.Dungeon,
        bounds: [[4, 140], [-121, 241]]
    });

})();