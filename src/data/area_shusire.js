(function(){

    let area = LAM.createArea("Shusire", {
        kr: "슈샤이어",
        path: "maps/areas/Shusire",
        zoomLevel: 4
    });

    area.registerMap("Regens Village", {
        kr: "리겐스 마을",
        type: MapTypeEnum.City
    });

    area.registerMap("Lake of Time", {
        kr: "머무른 시간의 호수",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Frost Prison Plateau", {
        kr: "서리감옥 고원",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Frozen Sea", {
        kr: "얼어붙은 바다",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Ice Butterfly Cliff", {
        kr: "얼음나비 절벽",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Blade Wind Hill", {
        kr: "칼날 바람 언덕",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Labyrinth of Mirrors", {
        kr: "거울의 미궁",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Baedan's Hideout", {
        kr: "바에단의 은신처",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Shadow Labyrinth", {
        kr: "그림자 미궁",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Circleside", {
        kr: "서클사이드",
        type: MapTypeEnum.Dungeon
    });

})();