(function(){

    let area = LAM.createArea("Arthetaine", {
        kr: "아르데타인",
        path: "maps/areas/Arthetaine",
        zoomLevel: 4
    });

    area.registerMap("Stern", {
        kr: "슈테른",
        type: MapTypeEnum.City,
        bounds: [[-250, 124],[-389, 261]]
    });

    area.registerMap("Cracked Land", {
        kr: "갈라진 땅",
        type: MapTypeEnum.Continent,
        bounds: [[-131, 125],[-249, 250]]
    });

    area.registerMap("Nebelhorn", {
        kr: "네벨호른",
        type: MapTypeEnum.Continent,
        bounds: [[-128, 3],[-251, 117]]
    });

    area.registerMap("Totrerich", {
        kr: "토트리치",
        type: MapTypeEnum.Continent,
        bounds: [[-257, 393],[-381, 517]]
    });

    area.registerMap("Riza Waterfall", {
        kr: "리제 폭포",
        type: MapTypeEnum.Continent,
        bounds: [[-136, 259],[-245, 381]]
    });

    area.registerMap("Wind Hill", {
        kr: "바람결 구릉지",
        type: MapTypeEnum.Continent,
        bounds: [[-381, 257],[-510, 372]]
    });

    area.registerMap("Red Sand Desert", {
        kr: "붉은 모래 사막",
        type: MapTypeEnum.Continent,
        bounds: [[-138, 388],[-243, 506]]
    });

    area.registerMap("Barren Passage", {
        kr: "메마른 통로",
        type: MapTypeEnum.Continent,
        bounds: [[-383, 9],[-510, 121]]
    });

    area.registerMap("Heart of Klaer", {
        kr: "크라테르의 심장",
        type: MapTypeEnum.Dungeon,
        bounds: [[5, -10],[-128, 122]]
    });

    area.registerMap("Aishman's Research Base", {
        kr: "아이히만의 연구기지",
        type: MapTypeEnum.Dungeon,
        bounds: [[-396, 384],[-497, 503]]
    });

    area.registerMap("Nest Of Battle Ants", {
        kr: "전투 개미 둥지",
        type: MapTypeEnum.Dungeon,
        bounds: [[0, 130],[-121, 245]]
    });

    area.registerMap("Air Gate", {
        kr: "에어가이츠",
        type: MapTypeEnum.Dungeon,
        bounds: [[13, 254],[-134, 388]]
    });

})();