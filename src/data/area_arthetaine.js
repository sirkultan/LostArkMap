(function(){

    let area = LAM.createArea("Arthetaine", {
        path: "maps/areas/Arthetaine",
        zoomLevel: 4,
        bounds: [[0,0], [-515, 515]]
    });

    area.registerMap("Stern", {
        type: MapTypeEnum.City,
        bounds: [[-250, 124],[-389, 261]]
    });

    area.registerMap("Cracked Land", {
        type: MapTypeEnum.Continent,
        bounds: [[-131, 125],[-249, 250]]
    });

    area.registerMap("Nebelhorn", {
        type: MapTypeEnum.Continent,
        bounds: [[-128, 3],[-251, 117]]
    });

    area.registerMap("Totrerich", {
        type: MapTypeEnum.Continent,
        bounds: [[-257, 393],[-381, 517]]
    });

    area.registerMap("Riza Waterfall", {
        type: MapTypeEnum.Continent,
        bounds: [[-136, 259],[-245, 381]]
    });

    area.registerMap("Wind Hill", {
        type: MapTypeEnum.Continent,
        bounds: [[-381, 257],[-510, 372]]
    });

    area.registerMap("Red Sand Desert", {
        type: MapTypeEnum.Continent,
        bounds: [[-138, 388],[-243, 506]]
    });

    area.registerMap("Barren Passage", {
        type: MapTypeEnum.Continent,
        bounds: [[-383, 9],[-510, 121]]
    });

    area.registerMap("Heart of Klaer", {
        type: MapTypeEnum.Dungeon,
        bounds: [[5, -10],[-128, 122]]
    });

    area.registerMap("Aishman's Research Base", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-396, 384],[-497, 503]]
    });

    area.registerMap("Nest Of Battle Ants", {
        type: MapTypeEnum.Dungeon,
        bounds: [[0, 130],[-121, 245]]
    });

    area.registerMap("Air Gate", {
        type: MapTypeEnum.Dungeon,
        bounds: [[13, 254],[-134, 388]]
    });

})();