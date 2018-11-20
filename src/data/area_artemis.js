(function() {

    let area = LAM.createArea("Artemis", {
        kr: "아르테미스",
        path: "maps/areas/Artemis",
        zoomLevel: 4
    });

    area.registerMap("Leonhard", {
        kr: "레온하트",
        img: "Leonhard.png",
        type: MapTypeEnum.City,
        markers: [
            { x: -409.62, y: 18.76, type: MarkerTypeEnum.SecretPassage,
                hintImage: 'artemis/LeaonhardHiddenPassage.png' },

            { x: -417.5, y: 12.75, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint1.png' },

            { x: -420.375, y: 15.25, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint1.png' },

            { x: -404.5, y: 56.51, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint2.png' },

            { x: -423.87, y: 69.26, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint6.png' },

            { x: -406.12, y: 84.01, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint4.png'},

            { x: -394.5, y: 94.76, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint3.png' },

            { x: -423.25, y: 107.13, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint5.png' },

            { x: -456.25, y: 145.25, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint7.png' },

            { x: -480.5, y: 123.5, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint8.png' },

            { x: -403.62, y: 57.89, popupText: "End of War Commemoration", type: MarkerTypeEnum.Vista,
                hintImage: 'artemis/LeonhardMokokoHint2.png' },

            { x: -399.75, y: 22.64, popupText: "Barutu's hidden past", type: MarkerTypeEnum.HiddenStory,
                hintText: "Room behind pillar", hintImage: "artemis/LeonhardHiddenStory1.png" },

            { x: -474.5, y: 121.26, popupText: "코룸바의 고양이", type: MarkerTypeEnum.HiddenStory,
                hintImage: 'artemis/LeonhardHiddenStory2.png' },

            { x: -452.75, y: 133.02, popupText: "해바라기 같은 사랑 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: '시간제한 20분 있습니다.', hintImage: 'artemis/LeonhardHiddenStory3.png' },

            { x: -454.5, y: 134.13, popupText: "해바라기 같은 사랑 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: 'artemis/LeonhardHiddenStory3.png' },

            { x: -386.25, y: 93.89, popupText: "Neria", type: MarkerTypeEnum.FavorNPC,
                hintText: "고대의 금화x5 (5000실링)<br>고대의 금화x25 (25000실링)<br>레온하트 네리아 (카드)<br>굳은 의지 각인서 I / 위대한 미술품 #1 (호감도아이템) / 시작되는 감정의 투구(머리 아바타)",
                hintImage: "artemis/LeonhardFavorNPCHint1.png" },

            { x: -456, y: 75.01, popupText: "Shira", type: MarkerTypeEnum.FavorNPC,
                hintText: "고대의 금화x5 (5000실링)<br>부활의 깃털x2<br>특별한 감자 (모험의 서)",
                hintImage: "artemis/LeonhardFavorNPCHint2.png"},

            { x: -388.25, y: 83.39, popupText: "베다의 레온하트 가정식", type: MarkerTypeEnum.CookingIngredient,
                hintText: "레온하트 요리상인 NPC - 베다<br>3000실링에 구매 가능",
                hintImage: "artemis/LeonhardCookingIngredientHint1.png" },

            { x: -456.62, y: 78.76, popupText: "성흔과 자국이 새겨진 감자", type: MarkerTypeEnum.CookingIngredient,
                hintText: "레온하트 NPC - 시이라<br>호감도 신뢰 달성 시 식재료 획득 가능",
                hintImage: "artemis/LeonhardCookingIngredientHint2.png"},

            { x: -481.25, y: 135.76, popupText: "거대한 밀 자루", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레온하트 요리사NPC - 헬리<br>레그리아 밀 빵 식재료",
                hintImage: "artemis/LeonhardFoodIngredientHint1.png" },

            { x: -397.5, y: 145.63, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [-496.25, 230.13]}
        ]
    });

    area.registerMap("Loghills", {
        kr: "로그힐",
        img: "Loghills.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -496.5, y: 229.76, title: "To Leonhard", type: MarkerTypeEnum.Zoning,
                teleportTo: [-397.5, 145.63]},
        ]
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