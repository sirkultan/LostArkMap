(function(){

    let area = LAM.createArea("Bern North", {
        path: "maps/areas/BernNorth",
        zoomLevel: 4,
        bounds: [[0,0], [-515, 515]]
    });

    area.registerMap("Rania Village", {
        type: MapTypeEnum.City,
        bounds: [[-260, 254],[-381, 378]]
    });

    area.registerMap("Bern Castle", {
        type: MapTypeEnum.City,
        bounds: [[-392, 119],[-508, 260]]
    });

    area.registerMap("Balancar Mountains", {
        type: MapTypeEnum.Continent,
        bounds: [[-261, 122],[-381, 248]]
    });

    area.registerMap("Bernil Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-132, 251],[-253, 382]]
    });

    area.registerMap("Crona Harbor", {
        type: MapTypeEnum.Continent,
        bounds: [[-388, 261],[-507, 381]]
    });

    area.registerMap("Parna Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-129, 385],[-256, 518]]
    });

    area.registerMap("Pesnar Plateau", {
        type: MapTypeEnum.Continent,
        bounds: [[-124, 128],[-249, 247]]
    });

    area.registerMap("Elberia Ancient Ruins", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-250, 7],[-387, 101]]
    });

    area.registerMap("Gorgon Nest", {
        type: MapTypeEnum.Dungeon,
        bounds: [[3, 398],[-127, 492]]
    });

})();