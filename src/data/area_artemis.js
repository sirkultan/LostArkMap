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
                hintImage: 'artemis/LeonhardHiddenPassage.png' },

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

            { x: -356.12, y: 260.89, title: "To Angemos Mountains", type: MarkerTypeEnum.Zoning,
                teleportTo: [ -314.25, 249.03]},

            { x: -404.87, y: 284.02, title: "Poisonclaw Robber Cave Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-356.12, 444.63]},

            { x: -472.25, y: 235.14, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint1.png"},

            { x: -460.75, y: 228, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint2.png"},

            { x: -456.12, y: 253.51, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint3.png"},

            { x: -436.37, y: 220.89, type: MarkerTypeEnum.Mokoko,
                hintText: "hidden behind the tree, need to activate secret entrance below to access",
                hintImage: "artemis/LoghillsMokokoHint4.png"},

            { x: -435.25, y: 222.39, type: MarkerTypeEnum.Mokoko,
                hintText: "hidden behind the tree, need to activate secret entrance below to access",
                hintImage: "artemis/LoghillsMokokoHint4.png"},

            { x: -420.25, y: 255.69, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint5.png"},

            { x: -386.56, y: 291.93, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint6.png"},

            { x: -379, y: 216.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint7.png"},

            { x: -378.37, y: 215.32, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint7.png"},

            { x: -470.62, y: 223.77, popupText: "오래된 낚시터", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint1.png"},

            { x: -443, y: 262.51, popupText: "예배당 폐허", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint2.png"},

            { x: -422.75, y: 258.07, popupText: "폭포 다리", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint3.png"},

            { x: -420.31, y: 271.07, popupText: "무너진 다리", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint4.png"},

            { x: -460.75, y: 217.63, popupText: "해바라기 같은 사랑 #2", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한 20분",
                hintImage: "artemis/LoghillsHiddenStoryHint1.png"},

            { x: -388.69, y: 268.31, popupText: "백마를 탄 왕자님 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한 20분",
                hintImage: "artemis/LoghillsHiddenStoryHint2.png"},

            { x: -462.62, y: 230.38, popupText: "상자(랜덤)", type: MarkerTypeEnum.TreasureBox,
                hintText: "낡은 금열쇠 필요",
                hintImage: "artemis/LoghillsTreasureHint1.png"},

            { x: -454.75, y: 237.13, popupText: "독발톱 도굴단 탐색가", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint1.png"},

            { x: -460.12, y: 244.64, popupText: "우두머리 붉은 부리 백새 #1", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint2.png"},

            { x: -439.25, y: 256.89, popupText: "우두머리 붉은 부리 백새 #2", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint3.png"},

            { x: -384.94, y: 290.62, popupText: "우두머리 크리클로우", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint4.png"},

            { x: -455.25, y: 239.26, popupText: "공명의 노래", type: MarkerTypeEnum.PlayInstrument,
                hintImage: "artemis/LoghillsPlayMusicHint1.png"},

            { x: -381.06, y: 217.25, popupText: "숲의 미뉴에트", type: MarkerTypeEnum.PlayInstrument,
                hintText: "Play 'Minuet of the forest' (숲의 미뉴에트)<br>grants access to the Mokoko Seeds here",
                hintImage: "artemis/LoghillsPlayMusicHint2.png"},

            { x: -460.62, y: 258.76, popupText: "토악질 덩어리", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레온하트 요리사NPC - 헬리<br>고단백 백새 스튜 식재료",
                hintImage: "artemis/LoghillsFoodIngredientHint1.png"},

            { x: -437.12, y: 222.89, type: MarkerTypeEnum.SecretPassage,
                hintText: "Activated by killing a golem around the statue",
                hintImage: "artemis/LoghillsSecretPassageHint1.png"}
        ]
    });

    area.registerMap("Angemos Mountains", {
        kr: "안게모스 산 기슭",
        img: "AngemosMountains.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -314.25, y: 249.03, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [ -356.12, 260.89 ]},
        ]
    });

    area.registerMap("Borderlands", {
        kr: "국경지대",
        img: "Borderlands.png",
        type: MapTypeEnum.Continent
    });

    area.registerMap("Poisonclaw Robber Cave", {
        kr: "독발톱 도굴단의 동굴",
        img: "PoisonclawRobberCave.png",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -356.12, y: 444.63, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [-404.87, 284.02]},

            { x: -460.5, y: 399.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint1.png"},

            { x: -457.87, y: 410.43, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint2.png"},

            { x: -441.62, y: 392.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint3.png"},

            { x: -441, y: 394.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint3.png"},

            { x: -431.19, y: 405.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint4.png"},

            { x: -369.81, y: 403.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawRobberCaveMokokoHint5.png"},

            { x: -423.06, y: 416.76, type: MarkerTypeEnum.SecretPassage,
                hintText: "해당구역 몬스터를 다 잡으면 부셔지게 바뀜",
                hintImage: "artemis/PoisonclawRobberCaveSecretHint1.png"},

            { x: -427.75, y: 427.88, popupText: "독발톱 도굴단 탐색가", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/PoisonclawRobberCaveBossHint1.png"},

            { x: -430.5, y: 407.76, popupText: "독발톱 도굴단 궁수", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/PoisonclawRobberCaveBossHint2.png"},
        ]
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