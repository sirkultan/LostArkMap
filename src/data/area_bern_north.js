(function(){

    let area = LAM.createArea("Bern North", {
        kr: "베른 북부",
        path: "maps/areas/BernNorth",
        zoomLevel: 4
    });

    area.registerMap("Rania Village", {
        kr: "라니아 마을",
        type: MapTypeEnum.City,
        markers: [
        ]
    });

    area.registerMap("Balancar Mountains", {
        kr: "발란카르 산맥",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Bernil Forest", {
        kr: "베르닐 삼림",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -208.44, y: 276.44, type: MarkerTypeEnum.TreasureMap,
                hintImage: "bern/TreasureMap1.jpg"},
        ]
    });

    area.registerMap("Bern Castle", {
        kr: "베른 성",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Crona Harbor", {
        kr: "크로나 항구",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Parna Forest", {
        kr: "파르나 숲",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Pesnar Plateau", {
        kr: "페스나르 고원",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("고대유적 엘베리아", {
        kr: "고대유적 엘베리아",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("고르곤의 둥지", {
        kr: "고르곤의 둥지",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();