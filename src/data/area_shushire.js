(function(){

    let area = LAM.createArea("Shushire", {
        path: "maps/areas/Shushire",
        zoomLevel: 4,
        bounds: [[0,0], [-530, 530]]
    });

    area.registerMap("Regens Village", {
        type: MapTypeEnum.City,
        bounds: [[-210, 112],[-302, 205]]
    });

    area.registerMap("Lake of Time", {
        type: MapTypeEnum.Continent,
        bounds: [[-409, -4],[-514, 100]]
    });

    area.registerMap("Frost Prison Plateau", {
        type: MapTypeEnum.Continent,
        bounds: [[-214, 219],[-301, 297]]
    });

    area.registerMap("Frozen Sea", {
        type: MapTypeEnum.Continent,
        bounds: [[-213, -9],[-302, 102]]
    });

    area.registerMap("Ice Butterfly Cliff", {
        type: MapTypeEnum.Continent,
        bounds: [[-200, 305],[-301, 397]]
    });

    area.registerMap("Blade Wind Hill", {
        type: MapTypeEnum.Continent,
        bounds: [[-311, 95],[-410, 211]]
    });

    area.registerMap("Labyrinth of Mirrors", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-102, 407], [-203, 523]]
    });

    area.registerMap("Baedan's Hideout", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-308, 305],[-406, 401]]
    });

    area.registerMap("Shadow Labyrinth", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-206, 403],[-306, 517]]
    });

    area.registerMap("Circleside", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-94, 211],[-207, 288]]
    });

})();