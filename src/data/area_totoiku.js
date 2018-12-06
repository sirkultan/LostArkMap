(function(){

    let area = LAM.createArea("Totoiku", {
        path: "maps/areas/Totoiku",
        zoomLevel: 4,
        bounds: [[0,0], [-515, 390]]
    });

    area.registerMap("Mokoko Village", {
        type: MapTypeEnum.City,
        bounds: [[-390, 124], [-504, 249]]
    });

    area.registerMap("Rocky Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-255, 155], [-380, 227]]
    });

    area.registerMap("Ocean Scent Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-385, 256], [-508, 383]]
    });

    area.registerMap("Sweet Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-257, 269], [-380, 388]]
    });

    area.registerMap("Silent Giants Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-129, 146], [-257, 243]]
    });

    area.registerMap("Pirate Lair", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-124, 267], [-251, 384]]
    });

    area.registerMap("Totoiku's Body", {
        type: MapTypeEnum.Dungeon,
        bounds: [[4, 140], [-121, 241]]
    });

})();