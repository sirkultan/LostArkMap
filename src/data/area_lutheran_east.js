(function(){

    let area = LAM.createArea("Lutheran East", {
        kr: "루테란 동부",
        path: "maps/areas/LutheranEast",
        zoomLevel: 6
    });

    area.registerMap("Castle of Lutheran", {
        kr: "루테란 성",
        type: MapTypeEnum.City,
        bounds: [[-318, -3], [-381, 58]]
    });

    area.registerMap("Diorika Plains", {
        kr: "디오리카 평원",
        type: MapTypeEnum.Continent,
        bounds: [[-319, 64], [-380, 119]]
    });

    area.registerMap("Solar Halo Hill", {
        kr: "해무리 언덕",
        type: MapTypeEnum.Continent,
        bounds: [[-322, 128], [-379, 187]]
    });

    area.registerMap("Nursery Rhizome", {
        kr: "배꽃나무 자생지",
        type: MapTypeEnum.Continent,
        bounds: [[-322, 195], [-380, 253]]
    });

    area.registerMap("Black Rose Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Continent,
        bounds: [[-257, 193], [-311, 253]]
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        type: MapTypeEnum.Continent,
        bounds: [[-258, 260], [-319, 318]]
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        type: MapTypeEnum.Continent,
        bounds: [[-257, 324], [-316, 380]]
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        type: MapTypeEnum.City,
        bounds: [[-264, 382], [-310, 449]]
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        type: MapTypeEnum.Continent,
        bounds: [[-320, 386], [-384, 447]]
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        type: MapTypeEnum.Continent,
        bounds: [[-320, 451], [-386, 511]]
    });

    area.registerMap("Underground Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Dungeon,
        bounds: [[-197, 192], [-252, 256]]
    });

    area.registerMap("Lastra Forest (+King's Tomb)", {
        kr: "라스트라 숲 / 왕의무덤",
        type: MapTypeEnum.Dungeon,
        bounds: [[-255, 124], [-319, 192]]
    });

})();