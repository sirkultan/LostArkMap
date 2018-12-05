(function(){

    let area = LAM.createArea("Bern North", {
        kr: "베른 북부",
        path: "maps/areas/BernNorth",
        zoomLevel: 4,
        bounds: [[0,0], [-515, 515]]
    });

    area.registerMap("Rania Village", {
        kr: "라니아 마을",
        type: MapTypeEnum.City,
        bounds: [[-260, 254],[-381, 378]]
    });

    area.registerMap("Bern Castle", {
        kr: "베른 성",
        type: MapTypeEnum.City,
        bounds: [[-392, 119],[-508, 260]]
    });

    area.registerMap("Balancar Mountains", {
        kr: "발란카르 산맥",
        type: MapTypeEnum.Continent,
        bounds: [[-261, 122],[-381, 248]]
    });

    area.registerMap("Bernil Forest", {
        kr: "베르닐 삼림",
        type: MapTypeEnum.Continent,
        bounds: [[-132, 251],[-253, 382]]
    });

    area.registerMap("Crona Harbor", {
        kr: "크로나 항구",
        type: MapTypeEnum.Continent,
        bounds: [[-388, 261],[-507, 381]]
    });

    area.registerMap("Parna Forest", {
        kr: "파르나 숲",
        type: MapTypeEnum.Continent,
        bounds: [[-129, 385],[-256, 518]]
    });

    area.registerMap("Pesnar Plateau", {
        kr: "페스나르 고원",
        type: MapTypeEnum.Continent,
        bounds: [[-124, 128],[-249, 247]]
    });

    area.registerMap("Elberia Ancient Ruins", {
        kr: "고대유적 엘베리아",
        type: MapTypeEnum.Dungeon,
        bounds: [[-250, 7],[-387, 101]]
    });

    area.registerMap("Gorgon Nest", {
        kr: "고르곤의 둥지",
        type: MapTypeEnum.Dungeon,
        bounds: [[3, 398],[-127, 492]]
    });

})();