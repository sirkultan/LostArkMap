(function(){

    let area = LAM.createArea("Lutheran West", {
        kr: "루테란 서부",
        path: "maps/areas/LutheranWest",
        zoomLevel: 4,
        bounds: [[0,0], [-500, 500]]
    });

    area.registerMap("Zagoras Mountain", {
        kr: "자고라스 산",
        type: MapTypeEnum.Continent,
        bounds: [[-352, 347], [-496, 505]]
    });

    area.registerMap("Lake Bars", {
        kr: "레이크바",
        type: MapTypeEnum.Continent,
        bounds: [[-347, 166], [-505, 332]]
    });

    area.registerMap("Medlinic Monastery", {
        kr: "메드리닉 수도원",
        type: MapTypeEnum.Continent,
        bounds: [[-177, 174], [-334, 340]]
    });

    area.registerMap("Vilblin Forest", {
        kr: "빌브린숲",
        type: MapTypeEnum.Continent,
        bounds: [[-2, 175], [-169, 333]]
    });

    area.registerMap("Plains of Battle", {
        kr: "격전의 평야",
        type: MapTypeEnum.Continent,
        bounds: [[-16, 336], [-146, 522]]
    });

    area.registerMap("Ridge of Brilliance", {
        kr: "광휘의 능선",
        type: MapTypeEnum.Dungeon,
        bounds: [[-347, 8], [-503, 137]]
    });

    area.registerMap("Gray Hammer Mine", {
        kr: "회색 망치 광산",
        type: MapTypeEnum.Dungeon,
        bounds: [[6, 5], [-165, 155]]
    });

})();