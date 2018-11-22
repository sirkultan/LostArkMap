(function(){

    let area = LAM.createArea("Lutheran West", {
        kr: "루테란 서부",
        path: "maps/areas/LutheranWest",
        zoomLevel: 4
    });

    area.registerMap("Zagoras Mountain", {
        kr: "자고라스 산",
        img: "ZagorasMountain.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Lake Bars", {
        kr: "레이크바",
        img: "LakeBars.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Medlinic Monastery", {
        kr: "메드리닉 수도원",
        img: "MedlinicMonastery.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Vilblin Forest", {
        kr: "빌브린숲",
        img: "VilblinForest.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Plains of Battle", {
        kr: "격전의 평야",
        img: "PlainsOfBattle.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Ridge of Brilliance", {
        kr: "광휘의 능선",
        img: "RidgeOfBrilliance.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("Gray Hammer Mine", {
        kr: "회색 망치 광산",
        img: "GrayHammerMine.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();