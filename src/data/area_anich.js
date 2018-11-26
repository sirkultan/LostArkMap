(function(){

    let area = LAM.createArea("Anich", {
        kr: "애니츠",
        path: "maps/areas/Anich",
        zoomLevel: 5
    });

    area.registerMap("Port City Changchun", {
        kr: "항구도시 창천",
        type: MapTypeEnum.City,
        bounds: [[-429, 167],[-504, 251]]
    });

    area.registerMap("Mirror Valley", {
        kr: "거울 계곡",
        type: MapTypeEnum.Continent,
        bounds: [[-168, 0],[-252, 77]]
    });

    area.registerMap("Delphi Prefecture", {
        kr: "델파이 현",
        type: MapTypeEnum.Continent,
        bounds: [[-258, 3],[-339, 81]]
    });

    area.registerMap("Wisteria hills", {
        kr: "등나무 언덕",
        type: MapTypeEnum.Continent,
        bounds: [[-345, 88],[-423, 163]]
    });

    area.registerMap("Forest of Sound", {
        kr: "소리의 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-261, 88],[-335, 168]]
    });

    area.registerMap("Twilight Mist", {
        kr: "황혼의 연무",
        type: MapTypeEnum.Continent,
        bounds: [[-175, 94],[-250, 157]]
    });

    area.registerMap("Headquarter Cave", {
        kr: "사령의 동굴",
        type: MapTypeEnum.Dungeon,
        bounds: [[-93, 95],[-169, 162]]
    });

    area.registerMap("Full Moon House", {
        kr: "만월의 고택",
        type: MapTypeEnum.Dungeon,
        bounds: [[-341, 259],[-428, 326]]
    });

    area.registerMap("Boundary of Life and Death", {
        kr: "삶과 죽음의 경계",
        type: MapTypeEnum.Dungeon,
        bounds: [[-174, 179],[-253, 243]]
    });

    area.registerMap("Enemy within", {
        kr: "적의 결계",
        type: MapTypeEnum.Dungeon,
        bounds: [[-259, 177],[-339, 246]]
    });

    area.registerMap("Inner Circle of Yan", {
        kr: "연의 결계",
        type: MapTypeEnum.Dungeon,
        bounds: [[-348, 172],[-414, 257]]
    });

})();