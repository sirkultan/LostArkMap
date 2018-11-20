(function() {

    let area = LAM.createArea("Artemis", {
        kr: "아르테미스",
        path: "maps/areas/Artemis"
    });

    area.registerMap("Leonhard", {
        kr: "레온하트",
        img: "Leonhard.png",
        type: MapTypeEnum.City
    });

    area.registerMap("Loghills", {
        kr: "로그힐",
        img: "Loghills.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Angemos Mountains", {
        kr: "안게모스 산 기슭",
        img: "AngemosMountains.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Borderlands", {
        kr: "국경지대",
        img: "Borderlands.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("독발톱 도굴단의 동굴", {
        kr: "독발톱 도굴단의 동굴",
        img: "독발톱 도굴단의 동굴.png",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("아길로스의 머리", {
        kr: "아길로스의 머리",
        img: "아길로스의 머리.png",
        type: MapTypeEnum.Dungeon
    });

    area.registerMap("아길로스의", {
        kr: "아길로스의",
        img: "아길로스의.png",
        type: MapTypeEnum.Dungeon
    });

})();