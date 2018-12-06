(function(){

    let area = LAM.createArea("Lutheran East", {
        path: "maps/areas/LutheranEast",
        zoomLevel: 6,
        bounds: [[0,0], [-390, 500]]
    });

    area.registerMap("Castle of Lutheran", {
        type: MapTypeEnum.City,
        bounds: [[-318, -3], [-381, 58]]
    });

    area.registerMap("Diorika Plains", {
        type: MapTypeEnum.Continent,
        bounds: [[-319, 64], [-380, 119]]
    });

    area.registerMap("Solar Halo Hill", {
        type: MapTypeEnum.Continent,
        bounds: [[-322, 128], [-379, 187]]
    });

    area.registerMap("Nursery Rhizome", {
        type: MapTypeEnum.Continent,
        bounds: [[-322, 195], [-380, 253]]
    });

    area.registerMap("Black Rose Chapel", {
        type: MapTypeEnum.Continent,
        bounds: [[-257, 193], [-311, 253]]
    });

    area.registerMap("Ria Monogamies", {
        type: MapTypeEnum.Continent,
        bounds: [[-258, 260], [-319, 318]]
    });

    area.registerMap("Borea Manor", {
        type: MapTypeEnum.Continent,
        bounds: [[-257, 324], [-316, 380]]
    });

    area.registerMap("Mane Waves Harbor", {
        type: MapTypeEnum.City,
        bounds: [[-264, 382], [-310, 449]]
    });

    area.registerMap("Crocnice Beach", {
        type: MapTypeEnum.Continent,
        bounds: [[-320, 386], [-384, 447]]
    });

    area.registerMap("Crying Storm", {
        type: MapTypeEnum.Continent,
        bounds: [[-320, 451], [-386, 511]]
    });

    area.registerMap("Underground Chapel", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-197, 192], [-252, 256]]
    });

    area.registerMap("Lastra Forest (+King's Tomb)", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-255, 124], [-319, 192]]
    });

})();