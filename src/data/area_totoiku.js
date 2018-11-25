(function(){

    let area = LAM.createArea("Totoiku", {
        kr: "토토이크",
        path: "maps/areas/Totoiku",
        zoomLevel: 4
    });

    area.registerMap("Mokoko Village", {
        kr: "모코코 마을",
        type: MapTypeEnum.City
    });

    area.registerMap("Rocky Forest", {
        kr: "성큼바위 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Ocean Scent Forest", {
        kr: "바다향기 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Sweet Forest", {
        kr: "달콤한 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Silent Giants Forest", {
        kr: "침묵하는 거인의 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Pirate Lair", {
        kr: "해적 소굴",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("Totoiku's Body", {
        kr: "토토이크의 몸",
        type: MapTypeEnum.Dungeon
    });

})();