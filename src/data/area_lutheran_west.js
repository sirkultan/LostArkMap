(function(){

    let area = LAM.createArea("Lutheran West", {
        path: "maps/areas/LutheranWest",
        zoomLevel: 4,
        bounds: [[0,0], [-500, 500]]
    });

    area.registerMap("Zagoras Mountain", {
        type: MapTypeEnum.Continent,
        bounds: [[-352, 347], [-496, 505]]
    });

    area.registerMap("Lake Bars", {
        type: MapTypeEnum.Continent,
        bounds: [[-347, 166], [-505, 332]]
    });

    area.registerMap("Medlinic Monastery", {
        type: MapTypeEnum.Continent,
        bounds: [[-177, 174], [-334, 340]]
    });

    area.registerMap("Vilblin Forest", {
        type: MapTypeEnum.Continent,
        bounds: [[-2, 175], [-169, 333]]
    });

    area.registerMap("Plains of Battle", {
        type: MapTypeEnum.Continent,
        bounds: [[-16, 336], [-146, 522]]
    });

    area.registerMap("Ridge of Brilliance", {
        type: MapTypeEnum.Dungeon,
        bounds: [[-347, 8], [-503, 137]]
    });

    area.registerMap("Gray Hammer Mine", {
        type: MapTypeEnum.Dungeon,
        bounds: [[6, 5], [-165, 155]]
    });

})();