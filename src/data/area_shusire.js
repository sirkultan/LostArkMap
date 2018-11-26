(function(){

    let area = LAM.createArea("Shusire", {
        kr: "슈샤이어",
        path: "maps/areas/Shusire",
        zoomLevel: 4
    });

    area.registerMap("Regens Village", {
        kr: "리겐스 마을",
        type: MapTypeEnum.City,
        bounds: [[-210, 112],[-302, 205]]
    });

    area.registerMap("Lake of Time", {
        kr: "머무른 시간의 호수",
        type: MapTypeEnum.Continent,
        bounds: [[-409, -4],[-514, 100]]
    });

    area.registerMap("Frost Prison Plateau", {
        kr: "서리감옥 고원",
        type: MapTypeEnum.Continent,
        bounds: [[-214, 219],[-301, 297]]
    });

    area.registerMap("Frozen Sea", {
        kr: "얼어붙은 바다",
        type: MapTypeEnum.Continent,
        bounds: [[-213, -9],[-302, 102]]
    });

    area.registerMap("Ice Butterfly Cliff", {
        kr: "얼음나비 절벽",
        type: MapTypeEnum.Continent,
        bounds: [[-200, 305],[-301, 397]]
    });

    area.registerMap("Blade Wind Hill", {
        kr: "칼날 바람 언덕",
        type: MapTypeEnum.Continent,
        bounds: [[-311, 95],[-410, 211]]
    });

    area.registerMap("Labyrinth of Mirrors", {
        kr: "거울의 미궁",
        type: MapTypeEnum.Dungeon,
        bounds: [[-102, 407], [-203, 523]]
    });

    area.registerMap("Baedan's Hideout", {
        kr: "바에단의 은신처",
        type: MapTypeEnum.Dungeon,
        bounds: [[-308, 305],[-406, 401]]
    });

    area.registerMap("Shadow Labyrinth", {
        kr: "그림자 미궁",
        type: MapTypeEnum.Dungeon,
        bounds: [[-206, 403],[-306, 517]]
    });

    area.registerMap("Circleside", {
        kr: "서클사이드",
        type: MapTypeEnum.Dungeon,
        bounds: [[-94, 211],[-207, 288]]
    });

})();