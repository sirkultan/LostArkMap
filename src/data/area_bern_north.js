(function(){

    let area = LAM.createArea("Bern North", {
        kr: "베른 북부",
        path: "maps/areas/BernNorth",
        zoomLevel: 4
    });

    area.registerMap("Rania Village", {
        kr: "라니아 마을",
        type: MapTypeEnum.City
    });

    area.registerMap("Balancar Mountains", {
        kr: "발란카르 산맥",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Bernil Forest", {
        kr: "베르닐 삼림",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Bern Castle", {
        kr: "베른 성",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Crona Harbor", {
        kr: "크로나 항구",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Parna Forest", {
        kr: "파르나 숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Pesnar Plateau", {
        kr: "페스나르 고원",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Elberia Ancient Ruins", {
        kr: "고대유적 엘베리아",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Gorgon Nest", {
        kr: "고르곤의 둥지",
        type: MapTypeEnum.Dungeon
    });

})();