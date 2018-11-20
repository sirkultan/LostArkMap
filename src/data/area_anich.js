(function(){

    let area = LAM.createArea("Anich", {
        kr: "애니츠",
        path: "maps/areas/Anich",
        zoomLevel: 4
    });

    area.registerMap("Mirror Valley", {
        kr: "거울 계곡",
        img: "MirrorValley.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: 100, y: 100, title: "Test", type: MarkerTypeEnum.Mokoko, popupText: "longer text" }
        ]
    });

    area.registerMap("Delphi Prefecture", {
        kr: "델파이 현",
        img: "DelphiPrefecture.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Wisteria hills", {
        kr: "등나무 언덕",
        img: "WisteriaHills.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Forest of sound", {
        kr: "소리의 숲",
        img: "ForestOfSound.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Port City Changchun", {
        kr: "항구도시 창천",
        img: "PortCityChangchun.png",
        type: MapTypeEnum.City
    });

    area.registerMap("Twilight Mist", {
        kr: "황혼의 연무",
        img: "TwilightMist.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("연의 결계", {
        kr: "연의 결계",
        img: "연의 결계.png",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("사령의 동굴", {
        kr: "사령의 동굴",
        img: "사령의 동굴.png",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("적의 결계", {
        kr: "적의 결계",
        img: "적의 결계.png",
        type: MapTypeEnum.Dungeon
    });

})();