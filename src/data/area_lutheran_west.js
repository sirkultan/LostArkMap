(function(){

    let area = LAM.createArea("Lutheran West", {
        kr: "루테란 서부",
        path: "maps/areas/LutheranWest",
        zoomLevel: 4
    });

    area.registerMap("Zagoras Mountain", {
        kr: "자고라스 산",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Lake Bars", {
        kr: "레이크바",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Medlinic Monastery", {
        kr: "메드리닉 수도원",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Vilblin Forest", {
        kr: "빌브린숲",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Plains of Battle", {
        kr: "격전의 평야",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Ridge of Brilliance", {
        kr: "광휘의 능선",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Gray Hammer Mine", {
        kr: "회색 망치 광산",
        type: MapTypeEnum.Dungeon
    });

})();