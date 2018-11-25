(function(){

    let area = LAM.createArea("Anich", {
        kr: "애니츠",
        path: "maps/areas/Anich",
        zoomLevel: 4
    });

    area.registerMap("Mirror Valley", {
        kr: "거울 계곡",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Delphi Prefecture", {
        kr: "델파이 현",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Wisteria hills", {
        kr: "등나무 언덕",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Forest of Sound", {
        kr: "소리의 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Port City Changchun", {
        kr: "항구도시 창천",
        type: MapTypeEnum.City
    });

    area.registerMap("Twilight Mist", {
        kr: "황혼의 연무",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Headquarter Cave", {
        kr: "사령의 동굴",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Full House", {
        kr: "만월의 고택",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Boundary of Life and Death", {
        kr: "삶과 죽음의 경계",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Enemy within", {
        kr: "적의 결계",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Inner Circle of Yan", {
        kr: "연의 결계",
        type: MapTypeEnum.Dungeon
    });

})();