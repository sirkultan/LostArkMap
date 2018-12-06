(function() {

    let area = LAM.createArea("Artemis", {
        path: "maps/areas/Artemis",
        zoomLevel: 4,
        bounds: [[0,0], [-515, 515]]
    });

    area.registerMap("_achievement", {
        type: MapTypeEnum.Internal,
        bounds: null
    });

    area.registerMap("Leonhard", {
        type: MapTypeEnum.City,
        bounds: [[-345, 5], [-500, 162]]
    });

    area.registerMap("Loghills", {
        type: MapTypeEnum.Continent,
        bounds: [[-345, 195], [-500, 317]]
    });

    area.registerMap("Angemos Mountains", {
        type: MapTypeEnum.Continent,
        bounds: [[-178, 178], [-330, 330]]
    });

    area.registerMap("Borderlands", {
        type: MapTypeEnum.Continent,
        bounds: [[-9, 180], [-160, 325]]
    });

    area.registerMap("Poisonclaw Robber Cave", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-345, 367], [-500, 500]]
    });

    area.registerMap("Agiloth's head", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-178, 348], [-330, 511]]
    });

    area.registerMap("Agiloth's Tail", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-9, 30], [-160, 150]]
    });

})();