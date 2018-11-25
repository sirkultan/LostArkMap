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
        type: MapTypeEnum.City,
        bounds: [[-345, 5], [-500, 162]]
    });

    area.registerMap("Loghills", {
        kr: "로그힐",
        type: MapTypeEnum.Continent,
        bounds: [[-345, 195], [-500, 317]]
    });

    area.registerMap("Angemos Mountains", {
        kr: "안게모스 산 기슭",
        type: MapTypeEnum.Continent,
        bounds: [[-178, 178], [-330, 330]]
    });

    area.registerMap("Borderlands", {
        kr: "국경지대",
        type: MapTypeEnum.Continent,
        bounds: [[-9, 180], [-160, 325]]
    });

    area.registerMap("Poisonclaw Robber Cave", {
        kr: "독발톱 도굴단의 동굴",
        type: MapTypeEnum.Dungeon,
        bounds: [[-345, 367], [-500, 500]]
    });

    area.registerMap("Agiloth's head", {
        kr: "아길로스의 머리",
        type: MapTypeEnum.Dungeon,
        bounds: [[-178, 348], [-330, 511]]
    });

    area.registerMap("Agiloth's Tail", {
        kr: "아길로스의 꼬리",
        type: MapTypeEnum.Dungeon,
        bounds: [[-9, 30], [-160, 150]]
    });

})();