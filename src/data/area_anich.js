(function(){

    let area = LAM.createArea("Anich", {
        path: "maps/areas/Anich",
        zoomLevel: 5,
        bounds: [[0,0], [-515, 330]]
    });

    area.registerMap("Port City Changchun", {
        type: MapTypeEnum.City,
        bounds: [[-429, 167],[-504, 251]]
    });

    area.registerMap("Mirror Valley", {
        type: MapTypeEnum.Continent,
        bounds: [[-168, 0],[-252, 77]]
    });

    area.registerMap("Delphi Prefecture", {
        type: MapTypeEnum.Continent,
        bounds: [[-258, 3],[-339, 81]]
    });

    area.registerMap("Wisteria hills", {
        type: MapTypeEnum.Continent,
        bounds: [[-345, 88],[-423, 163]]
    });

    area.registerMap("Forest of Sound", {
        type: MapTypeEnum.Continent,
        bounds: [[-261, 88],[-335, 168]]
    });

    area.registerMap("Twilight Mist", {
        type: MapTypeEnum.Continent,
        bounds: [[-175, 94],[-250, 157]]
    });

    area.registerMap("Headquarter Cave", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-93, 95],[-169, 162]]
    });

    area.registerMap("Full Moon House", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-341, 259],[-428, 326]]
    });

    area.registerMap("Boundary of Life and Death", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-174, 179],[-253, 243]]
    });

    area.registerMap("Enemy within", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-259, 177],[-339, 246]]
    });

    area.registerMap("Inner Circle of Yan", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-348, 172],[-414, 257]]
    });

})();