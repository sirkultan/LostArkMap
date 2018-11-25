(function() {

    let area = LAM.createArea("Artemis", {
        kr: "아르테미스",
        path: "maps/areas/Artemis",
        zoomLevel: 4
    });

    area.registerMap("_achievement", {
        type: MapTypeEnum.Internal
    });

    area.registerMap("Leonhard", {
        kr: "레온하트",
        type: MapTypeEnum.City
    });

    area.registerMap("Loghills", {
        kr: "로그힐",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Angemos Mountains", {
        kr: "안게모스 산 기슭",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Borderlands", {
        kr: "국경지대",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Poisonclaw Robber Cave", {
        kr: "독발톱 도굴단의 동굴",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Agiloth's head", {
        kr: "아길로스의 머리",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("Agiloth's Tail", {
        kr: "아길로스의 꼬리",
        type: MapTypeEnum.Dungeon
    });

})();