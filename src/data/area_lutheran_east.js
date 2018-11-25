(function(){

    let area = LAM.createArea("Lutheran East", {
        kr: "루테란 동부",
        path: "maps/areas/LutheranEast",
        zoomLevel: 5
    });

    area.registerMap("Castle of Lutheran", {
        kr: "루테란 성",
        type: MapTypeEnum.City
    });

    area.registerMap("Diorika Plains", {
        kr: "디오리카 평원",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Solar Halo Hill", {
        kr: "해무리 언덕",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Nursery Rhizome", {
        kr: "배꽃나무 자생지",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Black Rose Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        type: MapTypeEnum.City
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Underground Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Lastra Forest (+King's Tomb)", {
        kr: "라스트라 숲 / 왕의무덤",
        type: MapTypeEnum.Dungeon
    });

})();