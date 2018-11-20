(function(){

    let continent = LAM.registerContinent("Anich", {
        kr: "애니츠",
        path: "maps/continents/Anich"
    });

    continent.registerMap("Mirror Valley", {
        kr: "거울 계곡",
        img: "MirrorValley.png",
        type: MapTypeEnum.Continent
    });

    continent.registerMap("Delphi Prefecture", {
        kr: "델파이 현",
        img: "DelphiPrefecture.png",
        type: MapTypeEnum.Continent
    });

    continent.registerMap("Wisteria hills", {
        kr: "등나무 언덕",
        img: "WisteriaHills.png",
        type: MapTypeEnum.Continent
    });

    continent.registerMap("Forest of sound", {
        kr: "소리의 숲",
        img: "ForestOfSound.png",
        type: MapTypeEnum.Continent
    });

    continent.registerMap("Port City Changchun", {
        kr: "항구도시 창천",
        img: "PortCityChangchun.png",
        type: MapTypeEnum.City
    });

    continent.registerMap("Twilight Mist", {
        kr: "황혼의 연무",
        img: "TwilightMist.png",
        type: MapTypeEnum.Continent
    });

    continent.registerMap("연의 결계", {
        kr: "연의 결계",
        img: "연의 결계.png",
        type: MapTypeEnum.Dungeon
    });

    continent.registerMap("사령의 동굴", {
        kr: "사령의 동굴",
        img: "사령의 동굴.png",
        type: MapTypeEnum.Dungeon
    });

    continent.registerMap("적의 결계", {
        kr: "적의 결계",
        img: "적의 결계.png",
        type: MapTypeEnum.Dungeon
    });

})();