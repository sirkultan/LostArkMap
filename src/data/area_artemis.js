(function() {

    let area = LAM.createArea("Artemis", {
        kr: "아르테미스",
        path: "maps/areas/Artemis",
        zoomLevel: 4
    });

    area.registerMap("_achievement", {
        type: MapTypeEnum.Internal,
        markers: [
            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-225.11, 99.67], [-333.23, 133.9]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-80.43, 235.84]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-221, 1], [-239.5, 19.37]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-404.99, 58.44]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[ -221, 20.62], [-239.5, 38.61]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-471.98, 223.29]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-221, 39.73], [-239.5, 57.85]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-443.68, 262.63]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-221, 59.1], [-239.5, 77.59]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-423.43, 258.03]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-221, 78.71], [-239.5, 96.58]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-420.99, 270.89]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-240, 1], [-259, 19.24]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-234, 262.77]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-240, 20.49], [-259, 38.61]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-78.25, 259.96]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-240, 39.86], [-259, 57.97]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-58.19, 221.98]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-267.49, 2.32], [-274.36, 17.81]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-405, 283.28]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[ -289.24, 1.82], [-297.11, 18.56]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-206.93, 306.4]},

            { style: MarkerStyleEnum.Rectangle,
                bounds: [[-312.49, 1.82], [-319.23, 17.94]],
                color: Constants.AchievementMarkerColor,
                type: MarkerTypeEnum.Internal,
                teleportTo: [-34.18, 234.42]},
        ]
    });

    area.registerMap("Leonhard", {
        kr: "레온하트",
        type: MapTypeEnum.City,
        markers: [
            { x: -409.62, y: 18.76, type: MarkerTypeEnum.SecretPassage,
                hintImage: 'artemis/LeonhardHiddenPassage.jpg' },

            { x: -417.5, y: 12.75, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint1.jpg' },

            { x: -420.375, y: 15.25, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint1.jpg' },

            { x: -404.5, y: 56.51, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint2.jpg' },

            { x: -423.87, y: 69.26, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint6.jpg' },

            { x: -406.12, y: 84.01, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint4.jpg'},

            { x: -394.5, y: 94.76, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint3.jpg' },

            { x: -423.25, y: 107.13, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint5.jpg' },

            { x: -456.25, y: 145.25, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint7.jpg' },

            { x: -480.5, y: 123.5, type: MarkerTypeEnum.Mokoko,
                hintImage: 'artemis/LeonhardMokokoHint8.jpg' },

            { x: -403.62, y: 57.89, popupText: "End of War Commemoration", type: MarkerTypeEnum.Vista,
                hintImage: 'artemis/LeonhardMokokoHint2.jpg' },

            { x: -399.75, y: 22.64, popupText: "Barutu's hidden past", type: MarkerTypeEnum.HiddenStory,
                hintText: "Room behind pillar", hintImage: "artemis/LeonhardHiddenStory1.jpg" },

            { x: -474.5, y: 121.26, popupText: "코룸바의 고양이", type: MarkerTypeEnum.HiddenStory,
                hintImage: 'artemis/LeonhardHiddenStory2.jpg' },

            { x: -452.75, y: 133.02, popupText: "해바라기 같은 사랑 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: '시간제한 20분 있습니다.', hintImage: 'artemis/LeonhardHiddenStory3.jpg' },

            { x: -454.5, y: 134.13, popupText: "해바라기 같은 사랑 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: 'artemis/LeonhardHiddenStory3.jpg' },

            { x: -386.25, y: 93.89, popupText: "Neria", type: MarkerTypeEnum.FavorNPC,
                hintText: "고대의 금화x5 (5000실링)<br>고대의 금화x25 (25000실링)<br>레온하트 네리아 (카드)<br>굳은 의지 각인서 I / 위대한 미술품 #1 (호감도아이템) / 시작되는 감정의 투구(머리 아바타)",
                hintImage: "artemis/LeonhardFavorNPCHint1.jpg" },

            { x: -456, y: 75.01, popupText: "Shira", type: MarkerTypeEnum.FavorNPC,
                hintText: "고대의 금화x5 (5000실링)<br>부활의 깃털x2<br>특별한 감자 (모험의 서)",
                hintImage: "artemis/LeonhardFavorNPCHint2.jpg"},

            { x: -388.25, y: 83.39, popupText: "베다의 레온하트 가정식", type: MarkerTypeEnum.CookingIngredient,
                hintText: "레온하트 요리상인 NPC - 베다<br>3000실링에 구매 가능",
                hintImage: "artemis/LeonhardCookingIngredientHint1.jpg" },

            { x: -456.62, y: 78.76, popupText: "성흔과 자국이 새겨진 감자", type: MarkerTypeEnum.CookingIngredient,
                hintText: "레온하트 NPC - 시이라<br>호감도 신뢰 달성 시 식재료 획득 가능",
                hintImage: "artemis/LeonhardCookingIngredientHint2.jpg"},

            { x: -481.25, y: 135.76, popupText: "거대한 밀 자루", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레온하트 요리사NPC - 헬리<br>레그리아 밀 빵 식재료",
                hintImage: "artemis/LeonhardFoodIngredientHint1.jpg" },

            { x: -397.5, y: 145.63, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [-496.25, 230.13]}
        ]
    });

    area.registerMap("Loghills", {
        kr: "로그힐",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -496.5, y: 229.76, title: "To Leonhard", type: MarkerTypeEnum.Zoning,
                teleportTo: [-397.5, 145.63]},

            { x: -356.12, y: 260.89, title: "To Angemos Mountains", type: MarkerTypeEnum.Zoning,
                teleportTo: [ -314.25, 249.03]},

            { x: -404.87, y: 284.02, title: "Poisonclaw Robber Cave Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-356.12, 444.63]},

            { x: -472.25, y: 235.14, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint1.jpg"},

            { x: -460.75, y: 228, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint2.jpg"},

            { x: -456.12, y: 253.51, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint3.jpg"},

            { x: -436.37, y: 220.89, type: MarkerTypeEnum.Mokoko,
                hintText: "hidden behind the tree, need to activate secret entrance below to access",
                hintImage: "artemis/LoghillsMokokoHint4.jpg"},

            { x: -435.25, y: 222.39, type: MarkerTypeEnum.Mokoko,
                hintText: "hidden behind the tree, need to activate secret entrance below to access",
                hintImage: "artemis/LoghillsMokokoHint4.jpg"},

            { x: -420.25, y: 255.69, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint5.jpg"},

            { x: -386.56, y: 291.93, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint6.jpg"},

            { x: -379, y: 216.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint7.jpg"},

            { x: -378.37, y: 215.32, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/LoghillsMokokoHint7.jpg"},

            { x: -470.62, y: 223.77, popupText: "오래된 낚시터", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint1.jpg"},

            { x: -443, y: 262.51, popupText: "예배당 폐허", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint2.jpg"},

            { x: -422.75, y: 258.07, popupText: "폭포 다리", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint3.jpg"},

            { x: -420.31, y: 271.07, popupText: "무너진 다리", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/LoghillsVistaHint4.jpg"},

            { x: -460.75, y: 217.63, popupText: "해바라기 같은 사랑 #2", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한 20분",
                hintImage: "artemis/LoghillsHiddenStoryHint1.jpg"},

            { x: -388.69, y: 268.31, popupText: "백마를 탄 왕자님 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한 20분",
                hintImage: "artemis/LoghillsHiddenStoryHint2.jpg"},

            { x: -462.62, y: 230.38, popupText: "상자(랜덤)", type: MarkerTypeEnum.TreasureBox,
                hintText: "낡은 금열쇠 필요",
                hintImage: "artemis/LoghillsTreasureHint1.jpg"},

            { x: -454.75, y: 237.13, popupText: "독발톱 도굴단 탐색가", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint1.jpg"},

            { x: -460.12, y: 244.64, popupText: "우두머리 붉은 부리 백새 #1", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint2.jpg"},

            { x: -439.25, y: 256.89, popupText: "우두머리 붉은 부리 백새 #2", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint3.jpg"},

            { x: -384.94, y: 290.62, popupText: "우두머리 크리클로우", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/LoghillsBossHint4.jpg"},

            { x: -455.25, y: 239.26, popupText: "공명의 노래", type: MarkerTypeEnum.PlayInstrument,
                hintImage: "artemis/LoghillsPlayMusicHint1.jpg"},

            { x: -381.06, y: 217.25, popupText: "숲의 미뉴에트", type: MarkerTypeEnum.PlayInstrument,
                hintText: "Play 'Minuet of the forest' (숲의 미뉴에트)<br>grants access to the Mokoko Seeds here",
                hintImage: "artemis/LoghillsPlayMusicHint2.jpg"},

            { x: -460.62, y: 258.76, popupText: "토악질 덩어리", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레온하트 요리사NPC - 헬리<br>고단백 백새 스튜 식재료",
                hintImage: "artemis/LoghillsFoodIngredientHint1.jpg"},

            { x: -437.12, y: 222.89, type: MarkerTypeEnum.SecretPassage,
                hintText: "Activated by killing a golem around the statue",
                hintImage: "artemis/LoghillsSecretPassageHint1.jpg"},

            { x: -383.31, y: 289.21, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap6.jpg"},

            { x: -359.25, y: 237.34, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap7.jpg"},

            { x: -389.87, y: 262.97, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap8.jpg"},

            { x: -397.74, y: 243.28, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap10.jpg"},

            { x: -415.06, y: 261.58, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap12.jpg"},

            { x: -464.68, y: 210.66, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap13.jpg"}
        ]
    });

    area.registerMap("Angemos Mountains", {
        kr: "안게모스 산 기슭",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -314.25, y: 249.03, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [ -356.12, 260.89 ]},

            { x: -206.75, y: 236.28, title: "To Borderlands", type: MarkerTypeEnum.Zoning,
                teleportTo: [-148.75, 251.78]},

            { x: -206.25, y: 307.02, title: "아길로스의 머리 Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-249, 494.98]},

            { x: -279.5, y: 234.76, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AngemosMokokoHint1.jpg"},

            { x: -264.12, y: 287.12, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AngemosMokokoHint2.jpg"},

            { x: -236, y: 247.38, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AngemosMokokoHint3.jpg"},

            { x: -210.37, y: 252.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AngemosMokokoHint4.jpg"},

            { x: -255.87, y: 205.64, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AngemosMokokoHint5.jpg"},

            { x: -309.37, y: 245.13, popupText: "백마를 탄 왕자님 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "artemis/AngemosHiddenStoryHint1.jpg"},

            { x: -277, y: 228.89, popupText: "주정뱅이의 진실", type: MarkerTypeEnum.HiddenStory,
                hintImage: "artemis/AngemosHiddenStoryHint2.jpg"},

            { x: -284.12, y: 243.26, popupText: "우두머리 이끼늑대 #1", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AngemosBossHint1.jpg"},

            { x: -264.5, y: 293.75, popupText: "악취나는 뼈다귀 점액 괴물", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AngemosBossHint2.jpg"},

            { x: -259.5, y: 283.25, popupText: "우두머리 이끼늑대 #2", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AngemosBossHint3.jpg"},

            { x: -268.25, y: 203.39, popupText: "알수없이 뒤엉킨 변이체", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AngemosBossHint4.jpg"},

            { x: -224.12, y: 286.37, popupText: "우두머리 신비뱀", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AngemosBossHint5.jpg"},

            { x: -233.37, y: 262.75, popupText: "폭포가 떨어지는 계곡", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/AngemosVistaHint1.jpg"},

            { x: -252.56, y: 282.57, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap1.jpg"},

            { x: -266.12, y: 269.38, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap2.jpg"},

            { x: -266.69, y: 210.82, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap3.jpg"},

            { x: -238.12, y: 191.92, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap9.jpg"},

            { x: -225.19, y: 218.23, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap11.jpg"},

            { x: -221.37, y: 199.9, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap14.jpg"}
        ]
    });

    area.registerMap("Borderlands", {
        kr: "국경지대",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -148.75, y: 251.78, title: "To Angemos Mountains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-206.75, 236.28]},

            { x: -33.5, y: 234.54, title: "Agiloth's Tail Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-154.5, 81.03]},

            { x: -16.94, y: 255.63, title: "To Saland Hills (Yudia)", type: MarkerTypeEnum.Zoning,
                teleportTo: [-468.69, 416.88],
                teleportArea: 'Yudia'},

            { x: -139.37, y: 253.76, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/BorderlandsMokokoHint1.jpg"},

            { x: -134.25, y: 242.89, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/BorderlandsMokokoHint2.jpg"},

            { x: -120, y: 245.76, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/BorderlandsMokokoHint3.jpg"},

            { x: -82.25, y: 257.32, type: MarkerTypeEnum.Mokoko,
                hintText: "2 Seeds at this location",
                hintImage: "artemis/BorderlandsMokokoHint4.jpg"},

            { x: -82.62, y: 255.94, type: MarkerTypeEnum.Mokoko,
                hintText: "2 Seeds at this location",
                hintImage: "artemis/BorderlandsMokokoHint4.jpg"},

            { x: -82.25, y: 277.13, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/BorderlandsMokokoHint5.jpg"},

            { x: -65.69, y: 277.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/BorderlandsMokokoHint6.jpg"},

            { x: -86.5, y: 209.57, type: MarkerTypeEnum.Mokoko,
                hintText: "3 Seeds at this location",
                hintImage: "artemis/BorderlandsMokokoHint7.jpg"},

            { x: -83.87, y: 210.13, type: MarkerTypeEnum.Mokoko,
                hintText: "3 Seeds at this location",
                hintImage: "artemis/BorderlandsMokokoHint7.jpg"},

            { x: -83.25, y: 212.76, type: MarkerTypeEnum.Mokoko,
                hintText: "3 Seeds at this location",
                hintImage: "artemis/BorderlandsMokokoHint7.jpg"},

            { x: -89.37, y: 217.63, type: MarkerTypeEnum.SecretPassage,
                hintText: "Killing the closest monster group unlocks the access point to use",
                hintImage: "artemis/BorderlandsSecretHint1.jpg"},

            { x: -118, y: 228.01, popupText: "불타버린 사랑", type: MarkerTypeEnum.HiddenStory,
                hintImage: "artemis/BorderlandsHiddenStoryHint1.jpg"},

            { x: -111.12, y: 276.37, popupText: "백마를 탄 왕자님 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "artemis/BorderlandsHiddenStoryHint2.jpg"},

            { x: -72.5, y: 245.75, popupText: "저주받은 묘지기", type: MarkerTypeEnum.HiddenStory,
                hintImage: "artemis/BorderlandsHiddenStoryHint3.jpg"},

            { x: -88.5, y: 247.25, popupText: "레그리아 꽃 기름", type: MarkerTypeEnum.CookingIngredient,
                hintImage: "artemis/BorderlandsCookingIngredientHint1.jpg"},

            { x: -52.25, y: 262, popupText: "적아목 새순", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레온하트 요리사NPC - 헬리<br>적아목 새순 발효주 식재료",
                hintImage: "artemis/BorderlandsFoodIngredientHint1.jpg"},

            { x: -78.25, y: 259.38, popupText: "국경지대 수도원", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/BorderlandsVistaHint1.jpg"},

            { x: -57.5, y: 222.13, popupText: "여신상", type: MarkerTypeEnum.Vista,
                hintImage: "artemis/BorderlandsVistaHint2.jpg"},

            { x: -79.75, y: 235.82, popupText: "루드릭", type: MarkerTypeEnum.WorldBoss,
                hintText: "활동범위가 매우 넓으니 공동묘지 주변을 잘 찾아보자"},

            { x: -99.56, y: 253.81, popupText: "끔찍한 역병충 #1", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/BorderlandsBossHint1.jpg"},

            { x: -88.25, y: 229.01, popupText: "우두머리 불완전 변이체", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/BorderlandsBossHint2.jpg"},

            { x: -68.69, y: 241.25, popupText: "끔찍한 역병충 #2", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/BorderlandsBossHint3.jpg"},

            { x: -57, y: 254.25, popupText: "우두머리 시체거미", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/BorderlandsBossHint4.jpg"},

            { x: -72.75, y: 285.38, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap4.jpg"},

            { x: -55.56, y: 266.57, type: MarkerTypeEnum.TreasureMap,
                hintImage: "artemis/TreasureMap5.jpg"}
        ]
    });

    area.registerMap("Poisonclaw Robber Cave", {
        kr: "독발톱 도굴단의 동굴",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -356.12, y: 444.63, title: "To Loghills", type: MarkerTypeEnum.Zoning,
                teleportTo: [-404.87, 284.02]},

            { x: -460.5, y: 399.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint1.jpg"},

            { x: -457.87, y: 410.43, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint2.jpg"},

            { x: -441.62, y: 392.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint3.jpg"},

            { x: -441, y: 394.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint3.jpg"},

            { x: -431.19, y: 405.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint4.jpg"},

            { x: -369.81, y: 403.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/PoisonclawCaveMokokoHint5.jpg"},

            { x: -423.06, y: 416.76, type: MarkerTypeEnum.SecretPassage,
                hintText: "해당구역 몬스터를 다 잡으면 부셔지게 바뀜",
                hintImage: "artemis/PoisonclawCaveSecretHint1.jpg"},

            { x: -427.75, y: 427.88, popupText: "독발톱 도굴단 탐색가", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/PoisonclawCaveBossHint1.jpg"},

            { x: -430.5, y: 407.76, popupText: "독발톱 도굴단 궁수", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/PoisonclawCaveBossHint2.jpg"},
        ]
    });

    area.registerMap("Agiloth's head", {
        kr: "아길로스의 머리",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -249, y: 494.98, title: "To Angemos Mountains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-206.25, 307.02]},

            { x: -271.5, y: 459.26, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint1.jpg"},

            { x: -271.37, y: 462.14, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint1.jpg"},

            { x: -316.87, y: 394.52, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint2.jpg"},

            { x: -259.25, y: 413.52, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint3.jpg"},

            { x: -269.37, y: 397.02, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint4.jpg"},

            { x: -220.87, y: 427.89, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothHeadMokokoHint5.jpg"},

            { x: -261.37, y: 453.5, popupText: "우두머리 역병충 무리", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AgilothHeadBossHint1.jpg"},

            { x: -295.37, y: 406.63, popupText: "늙은 메라뱀", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AgilothHeadBossHint2.jpg"},

            { x: -216.62, y: 388.63, popupText: "악취나는 역병지기", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AgilothHeadBossHint3.jpg"},

            { x: -266.12, y: 458.37, type: MarkerTypeEnum.SecretPassage,
                hintImage: "artemis/AgilothHeadSecretHint1.jpg"},

            { x: -312.5, y: 393.51, type: MarkerTypeEnum.SecretPassage,
                hintImage: "artemis/AgilothHeadSecretHint2.jpg"},

            { x: -272.25, y: 403.26, type: MarkerTypeEnum.SecretPassage,
                hintImage: "artemis/AgilothHeadSecretHint3.jpg"},

            { x: -313.12, y: 396.63, popupText: "499년된 메라주", type: MarkerTypeEnum.FoodIngredient,
                hintText: "2시간이 지나면 500년된 메라주로 바뀜 그 때 마시면 된다. 미리 마시거나 유효기간이 지나고 마시면 모험의 서를 완료할 수 없다",
                hintImage: "artemis/AgilothHeadFoodIngredientHint1.jpg"}
        ]
    });

    area.registerMap("Agiloth's Tail", {
        kr: "아길로스의 꼬리",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -154.5, y: 81.03, title: "To Borderlands", type: MarkerTypeEnum.Zoning,
                teleportTo: [-33.5, 234.54]},

            { x: -89.69, y: 97.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothTailMokokoHint1.jpg"},

            { x: -78.5, y: 84.01, type: MarkerTypeEnum.Mokoko,
                hintImage: "artemis/AgilothTailMokokoHint2.jpg"},

            { x: -91.44, y: 69.95, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "artemis/AgilothTailMokokoHint3.jpg"},

            { x: -91.5, y: 71.44, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "artemis/AgilothTailMokokoHint3.jpg"},

            { x: -93.62, y: 55.08, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "artemis/AgilothTailMokokoHint4.jpg"},

            { x: -93, y: 52.95, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "artemis/AgilothTailMokokoHint4.jpg"},

            { x: -81.37, y: 66.82, popupText: "늙은 메라뱀", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AgilothTailBossHint1.jpg"},

            { x: -43.12, y: 77.19, popupText: "썩어문드러진 감염자", type: MarkerTypeEnum.Boss,
                hintImage: "artemis/AgilothTailBossHint2.jpg"},

            { x: -89.25, y: 67.94, type: MarkerTypeEnum.SecretPassage,
                hintImage: "artemis/AgilothTailSecretHint1.jpg"},

            { x: -88.06, y: 58.32, type: MarkerTypeEnum.SecretPassage,
                hintImage: "artemis/AgilothTailSecretHint2.jpg"}
        ]
    });

})();