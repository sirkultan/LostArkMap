(function(){

    let area = LAM.createArea("Lutheran East", {
        kr: "루테란 동부",
        path: "maps/areas/LutheranEast",
        zoomLevel: 5
    });

    area.registerMap("Castle of Lutheran", {
        kr: "루테란 성",
        type: MapTypeEnum.City,
        markers: [
            { x: -368.84, y: 60.35, title: "To Diorika Plains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-357, 71.5]},

            { x: -376.31, y: 47.44, title: "To Plains of Battle", type: MarkerTypeEnum.Zoning,
                teleportTo: [-37, 473.14],
                teleportArea: "Lutheran West"},

            { x: -371.37, y: 35.35, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint1.jpg"},

            { x: -363.16, y: 36.41, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint2.jpg"},

            { x: -360.5, y: 58.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint3.jpg"},

            { x: -351.59, y: 14.25, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint4.jpg"},

            { x: -352.03, y: 14.66, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint4.jpg"},

            { x: -345.28, y: 12.82, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint5.jpg"},

            { x: -342.94, y: 16.41, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.jpg"},

            { x: -343.22, y: 15.69, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.jpg"},

            { x: -343.69, y: 16.04, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.jpg"},

            { x: -330.22, y: 27.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint7.jpg"},

            { x: -359.69, y: 56.97, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint1.jpg"},

            { x: -350.62, y: 13.97, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint2.jpg"},

            { x: -343.03, y: 19.1, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint3.jpg"},

            { x: -347.12, y: 21.06, popupText: "상자 #1", type: MarkerTypeEnum.TreasureBox },

            { x: -341.16, y: 21.19, popupText: "하녀장의 은밀한...", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/LutheranCastleHiddenStoryHint1.jpg"},

            { x: -340.69, y: 39.91, popupText: "흙 묻은 칠색사탕", type: MarkerTypeEnum.CookingIngredient,
                hintImage: "lutheran/LutheranCastleCookingIngredientHint1.jpg"}
        ]
    });

    area.registerMap("Diorika Plains", {
        kr: "디오리카 평원",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -357, y: 71.5, title: "To Castle of Lutheran", type: MarkerTypeEnum.Zoning,
                teleportTo: [-368.84, 60.35]},

            { x: -357.69, y: 119.43, title: "To Solar Halo Hill", type: MarkerTypeEnum.Zoning,
                teleportTo: [-381.31, 159.11]},

            { x: -375.87, y: 90.53, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint1.jpg"},

            { x: -373.87, y: 90.47, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint2.jpg"},

            { x: -367.37, y: 83.54, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint3.jpg"},

            { x: -368.41, y: 106.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint4.jpg"},

            { x: -351.69, y: 82.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint5.jpg"},

            { x: -347.37, y: 92.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint6.jpg"},

            { x: -350.37, y: 103.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint7.jpg"},

            { x: -339.31, y: 69, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint8.jpg"},

            { x: -341.78, y: 89.72, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint9.jpg"},

            { x: -348.84, y: 116.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint10.jpg"},

            { x: -323.81, y: 110.1, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint11.jpg"},

            { x: -353.69, y: 115.78, popupText: "절벽 위에서 바라본 로나운의 생가", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/DiorikaVistaHint1.jpg"},

            { x: -350.06, y: 115.16, popupText: "상자(낡은 금열쇠)", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/DiorikaTreasureHint1.jpg"},

            { x: -348.62, y: 114.35, popupText: "덩치 큰 까마귀", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/DiorikaBossHint1.jpg"},

            { x: -325.59, y: 104.78, popupText: "딱딱한 붉은 귀 이새", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/DiorikaBossHint2.jpg"}
        ]
    });

    area.registerMap("Solar Halo Hill", {
        kr: "해무리 언덕",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -381.31, y: 159.11, title: "To Diorika Plains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-357.69, 119.43]},

            { x: -340.16, y: 178.35, title: "Lastra Forest (+Kings Tomb) Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-317.28, 156.54]},

            { x: -350.31, y: 182.94, title: "To Nursery Rhizome", type: MarkerTypeEnum.Zoning,
                teleportTo: [-381.19, 223.66]},

            { x: -357.19, y: 135.38, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint1.jpg"},

            { x: -367.75, y: 148.35, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint2.jpg"},

            { x: -352.22, y: 150.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint3.jpg"},

            { x: -355.75, y: 155.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint4.jpg"},

            { x: -349.16, y: 159.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint5.jpg"},

            { x: -362.97, y: 159.81, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint6.jpg"},

            { x: -359.53, y: 163.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint7.jpg"},

            { x: -373.72, y: 170.34, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint8.jpg"},

            { x: -366.91, y: 181.62, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint9.jpg"},

            { x: -342.84, y: 170.41, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/SolarMokokoHint10.jpg"},

            { x: -369.56, y: 150.44, popupText: "슈헤리트단 검투사", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/SolarBossHint1.jpg"},

            { x: -332.22, y: 165.5, popupText: "윌리윌리", type: MarkerTypeEnum.WorldBoss,
                hintImage: "lutheran/SolarWorldBossHint1.jpg"},

            { x: -351.81, y: 135.32, popupText: "호박당의 숭고한 의식", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/SolarHiddenStoryHint1.jpg"},

            { x: -346.19, y: 162.35, popupText: "해바라기 밭", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/SolarVistaHint1.jpg"},
        ]
    });

    area.registerMap("Nursery Rhizome", {
        kr: "배꽃나무 자생지",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -381.19, y: 223.66, title: "To Solar Halo Hill", type: MarkerTypeEnum.Zoning,
                teleportTo: [-350.31, 182.94]},

            { x: -322.91, y: 227.31, title: "To Black Rose Chapel", type: MarkerTypeEnum.Zoning,
                teleportTo: [-312.53, 224.28]},

            { x: -376.66, y: 221, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint1.jpg"},

            { x: -365.09, y: 215.78, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint2.jpg"},

            { x: -351.84, y: 215.97, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint3.jpg"},

            { x: -346.25, y: 213.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint4.jpg"},

            { x: -351.31, y: 203.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint5.jpg"},

            { x: -362.47, y: 228.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint6.jpg"},

            { x: -364.22, y: 245.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint7.jpg"},

            { x: -359.34, y: 251.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint8.jpg"},

            { x: -335.5, y: 227.29, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint9.jpg"},

            { x: -330.16, y: 230.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/NurseryMokokoHint10.jpg"},

            { x: -368.06, y: 209.88, popupText: "징그러운 과수원 바구미", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/NurseryBossHint1.jpg"},

            { x: -366.19, y: 210.97, popupText: "나무에 담긴 마음 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/NurseryHiddenStoryHint1.jpg"},

            { x: -367.44, y: 216.88, popupText: "나무에 담긴 마음 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한이 40초로 굉장히 빡빡하니<br>서두르시는게 좋습니다",
                hintImage: "lutheran/NurseryHiddenStoryHint2.jpg"},

            { x: -363.06, y: 219, popupText: "나무에 담긴 마음 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/NurseryHiddenStoryHint3.jpg"},

            { x: -334.81, y: 225.19, type: MarkerTypeEnum.HiddenQuest,
                hintImage: "lutheran/NurseryHiddenQuest1.jpg"},

            { x: -334.56, y: 219.63, popupText: "폐허가 된 마을", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/NurseryVistaHint1.jpg"},
        ]
    });

    area.registerMap("Black Rose Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -312.53, y: 224.28, title: "To Nursery Rhizome", type: MarkerTypeEnum.Zoning,
                teleportTo: [-322.91, 227.31]},

            { x: -283.34, y: 253.91, title: "To Ria Monogamies", type: MarkerTypeEnum.Zoning,
                teleportTo: [-292.97, 266.82]},

            { x: -281.28, y: 198.82, title: "Underground Chapel Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-230.19, 205.51]},

            { x: -291.56, y: 239.47, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint1.jpg"},

            { x: -303.72, y: 213.79, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint2.jpg"},

            { x: -296.12, y: 214.25, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint3.jpg"},

            { x: -296.09, y: 214.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint3.jpg"},

            { x: -295.25, y: 211.97, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint4.jpg"},

            { x: -296.16, y: 206.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint5.jpg"},

            { x: -296.09, y: 204.97, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint6.jpg"},

            { x: -294.72, y: 203.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint7.jpg"},

            { x: -288.09, y: 216.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint8.jpg"},

            { x: -281.78, y: 211.66, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint9.jpg"},

            { x: -276.5, y: 219.1, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint10.jpg"},

            { x: -271.22, y: 200.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint11.jpg"},

            { x: -261.31, y: 228.41, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BlackRoseMokokoHint12.jpg"},

            { x: -287.09, y: 244.69, popupText: "거대 흑장미무늬 거미", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BlackRoseBossHint1.jpg"},

            { x: -275.06, y: 201.69, popupText: "음흉한 사교도 전도자", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BlackRoseBossHint2.jpg"},

            { x: -287.87, y: 219.44, popupText: "흑장미의 이름", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/BlackRoseHiddenStoryHint1.jpg"},

            { x: -297.87, y: 207.41, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/BlackRoseSecretHint1.jpg"},

            { x: -259.66, y: 228.19, popupText: "절벽 무덤", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/BlackRoseVistaHint1.jpg"},

            { x: -308.12, y: 229.63, type: MarkerTypeEnum.TreasureMap,
                hintImage: "lutheran/TreasureMap2.jpg"},
        ]
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -292.97, y: 266.82, title: "To Black Rose Chapel", type: MarkerTypeEnum.Zoning,
                teleportTo: [-283.34, 253.91]},

            { x: -280.34, y: 311.88, title: "To Borea Manor", type: MarkerTypeEnum.Zoning,
                teleportTo: [-310.5, 340.35]},

            { x: -293.75, y: 266.53, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint1.jpg"},

            { x: -310.5, y: 277.69, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint2.jpg"},

            { x: -298.09, y: 291.4, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint3.jpg"},

            { x: -288.19, y: 300.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint4.jpg"},

            { x: -278.66, y: 283.34, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint5.jpg"},

            { x: -278.78, y: 289.78, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint6.jpg"},

            { x: -270.06, y: 272.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint7.jpg"},

            { x: -266.28, y: 280.66, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RiaMokokoHint8.jpg"},

            { x: -286.72, y: 286.18, popupText: "광기에 물든 홍학 우두머리", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/RiaBossHint1.jpg"},

            { x: -300.22, y: 293.18, popupText: "마군단 거인병 우두머리", type: MarkerTypeEnum.Boss},

            { x: -276.69, y: 284.5, popupText: "지배당한 물 회오리 정령", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/RiaBossHint3.jpg"},

            { x: -272.56, y: 294.03, popupText: "지배당한 거대 푸름 전사", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/RiaBossHint4.jpg"},

            { x: -285.66, y: 274.56, popupText: "천재의 비애", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/RiaHiddenStoryHint1.jpg"},

            { x: -275.16, y: 284.75, popupText: "푸름의 기원#2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/RiaHiddenStoryHint2.jpg"},

            { x: -269, y: 280.16, popupText: "푸름의 기원 #1", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/RiaHiddenStoryHint3.jpg"},

            { x: -269.16, y: 284.82, popupText: "푸름의 기원 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/RiaHiddenStoryHint4.jpg"},

            { x: -263.34, y: 287.13, popupText: "푸름의 기원 #4", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/RiaHiddenStoryHint5.jpg"},

            { x: -287.72, y: 272, popupText: "아제나포리움", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/RiaVistaHint1.jpg"},

            { x: -271.19, y: 271.38, popupText: "푸름의 땅 폭포", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/RiaVistaHint2.jpg"},

            { x: -267.62, y: 278.5, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/RiaSecretHint1.jpg"},
        ]
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -310.5, y: 340.35, title: "To Ria Monogamies", type: MarkerTypeEnum.Zoning,
                teleportTo: [-280.34, 311.88]},

            { x: -277.62, y: 366.13, title: "To Mane Waves Harbor", type: MarkerTypeEnum.Zoning,
                teleportTo: [-291.12, 400.07]},

            { x: -300.34, y: 338.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint1.jpg"},

            { x: -294.28, y: 329.6, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint2.jpg"},

            { x: -294.03, y: 342.91, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint3.jpg"},

            { x: -293.34, y: 357.96, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint4.jpg"},

            { x: -282.44, y: 334.78, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint5.jpg"},

            { x: -284.19, y: 337.5, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint6.jpg"},

            { x: -281.34, y: 345.5, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint7.jpg"},

            { x: -274.78, y: 336.78, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint8.jpg"},

            { x: -268.56, y: 346.97, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/BoreaManorMokokoHint9.jpg"},

            { x: -285.97, y: 328.88, popupText: "잔인한 트릴", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BoreaManorBossHint1.jpg"},

            { x: -272.81, y: 332.44, popupText: "폭주한 마법사 임프", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BoreaManorBossHint2.jpg"},

            { x: -270.94, y: 342.31, popupText: "폭주한 이카루스", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BoreaManorBossHint3.jpg"},

            { x: -271.5, y: 357.31, popupText: "고독한 게르드", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/BoreaManorBossHint4.jpg"},

            { x: -282.41, y: 352.06, popupText: "Minuet of the Forest", type: MarkerTypeEnum.PlayInstrument,
                hintText: "Play Minuet of the forest at this location (숲의 미뉴에트)",
                hintImage: "lutheran/BoreaManorPlayInstrumentHint1.jpg"},

            { x: -274.62, y: 337.16, popupText: "폐허가 된 요새", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/BoreaManorVistaHint1.jpg"},

            { x: -287.25, y: 332.5, type: MarkerTypeEnum.HiddenQuest,
                hintImage: "lutheran/BoreaManorHiddenQuestHint1.jpg"},
        ]
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        type: MapTypeEnum.City,
        markers: [
            { x: -291.12, y: 400.07, title: "To Borea Manor", type: MarkerTypeEnum.Zoning,
                teleportTo: [-277.62, 366.13]},

            { x: -303.69, y: 405.75, title: "To Crocnice Beach", type: MarkerTypeEnum.Zoning,
                teleportTo: [-363, 390.51]},

            { x: -283.81, y: 437.72, popupText: "To World", type: MarkerTypeEnum.Zoning,
                teleportTo: [-360.5, 323.76],
                teleportArea: "World"},

            { x: -290.25, y: 405.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint1.jpg"},

            { x: -287.62, y: 411.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint2.jpg"},

            { x: -292.31, y: 419.56, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint3.jpg"},

            { x: -284.81, y: 420.81, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint4.jpg"},

            { x: -277.25, y: 405.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint5.jpg"},

            { x: -271.12, y: 401.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ManeWavesMokokoHint6.jpg"},

            { x: -273.31, y: 389.94, popupText: "귀족의 삶", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/ManeWavesHiddenStoryHint1.jpg"},
        ]
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -363, y: 390.51, title: "To Mane Waves Harbor", type: MarkerTypeEnum.Zoning,
                teleportTo: [-303.69, 405.75]},

            { x: -324.94, y: 432.32, title: "Crying Storm Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-359.22, 458.03]},

            { x: -330.37, y: 426.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint1.jpg" },

            { x: -338.78, y: 426.13, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint2.jpg" },

            { x: -336.72, y: 415.47, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint3.jpg" },

            { x: -339.53, y: 414.79, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint4.jpg" },

            { x: -353, y: 425.25, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint5.jpg" },

            { x: -353.09, y: 415.5, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint6.jpg" },

            { x: -359.72, y: 424.72, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint7.jpg" },

            { x: -350.47, y: 410.54, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint8.jpg" },

            { x: -348.53, y: 405.13, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint9.jpg" },

            { x: -348.53, y: 404.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint9.jpg" },

            { x: -352.81, y: 404.29, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint10.jpg" },

            { x: -352.41, y: 404.23, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint10.jpg" },

            { x: -363.28, y: 404.1, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint11.jpg" },

            { x: -361.81, y: 395.73, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint12.jpg" },

            { x: -367.12, y: 394.48, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint13.jpg" },

            { x: -370.97, y: 406.26, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint14.jpg" },

            { x: -370.12, y: 401.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint15.jpg" },

            { x: -374.41, y: 398.2, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CrocniceMokokoHint16.jpg" },

            { x: -360.28, y: 403.72, popupText: "포식자 크록", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/CrocniceBossHint1.jpg"},

            { x: -342.87, y: 415.16, popupText: "난파된 배", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/CrocniceVistaHint1.jpg"},

            { x: -359.66, y: 397.47, popupText: "아름다운 해변가", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/CrocniceVistaHint2.jpg"},

            { x: -346.72, y: 426.12, popupText: "도적이 떠난 야영지", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/CrocniceVistaHint3.jpg"},

            { x: -349.53, y: 419.59, popupText: "바위동굴 조개", type: MarkerTypeEnum.FoodIngredient,
                hintText: "루테란성 요리사NPC - 하이드<br>최고급 해산물 스튜 식재료",
                hintImage: "lutheran/CrocniceFoodIngredientHint1.jpg"},

            { x: -352.69, y: 418.88, popupText: "바위동굴 새우", type: MarkerTypeEnum.FoodIngredient,
                hintText: "루테란성 요리사NPC - 하이드<br>최고급 해산물 스튜 식재료",
                hintImage: "lutheran/CrocniceFoodIngredientHint2.jpg"},

            { x: -350.16, y: 406.19, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/CrocniceSecretHint1.jpg"},

            { x: -353.31, y: 403.82, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/CrocniceSecretHint2.jpg"},
        ]
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -359.22, y: 458.03, title: "To Crocnice Beach", type: MarkerTypeEnum.Zoning,
                teleportTo: [-324.94, 432.32]},

            { x: -350.84, y: 468.53, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint1.jpg" },

            { x: -372.09, y: 473.97, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint2.jpg" },

            { x: -367.22, y: 478.59, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint3.jpg" },

            { x: -366.66, y: 477.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint3.jpg" },

            { x: -356.94, y: 483.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint4.jpg" },

            { x: -348.03, y: 476.03, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint5.jpg" },

            { x: -348.78, y: 475.37, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint5.jpg" },

            { x: -335.97, y: 479.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint6.jpg" },

            { x: -335.41, y: 488.59, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/CryingStormMokokoHint7.jpg" },

            { x: -368, y: 480.13, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/CryingStormSecretHint1.jpg"},

            { x: -343.41, y: 474.44, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/CryingStormSecretHint2.jpg"},
        ]
    });

    area.registerMap("Underground Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -230.19, y: 205.51, title: "To Black Rose Chapel", type: MarkerTypeEnum.Zoning,
                teleportTo: [-281.28, 198.82]},

            { x: -237.28, y: 214.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint1.jpg"},

            { x: -215, y: 214.53, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint2.jpg"},

            { x: -206.84, y: 220.66, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint3.jpg"},

            { x: -206.06, y: 220.66, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint4.jpg"},

            { x: -205.69, y: 221.06, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint4.jpg"},

            { x: -207, y: 233.09, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint5.jpg"},

            { x: -206.72, y: 233.56, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint5.jpg"},

            { x: -215.5, y: 239.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ChapelMokokoHint6.jpg"},

            { x: -207.09, y: 221.72, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/ChapelSecretHint1.jpg"},

            { x: -207.87, y: 232.75, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/ChapelSecretHint2.jpg"},

            { x: -225.69, y: 228.5, type: MarkerTypeEnum.Notice,
                hintText: "Certain routes in this dungeon only open when certain passive residents are killed",
                hintImage: "lutheran/ChapelNoticeHint1.jpg"},
        ]
    });

    area.registerMap("Lastra Forest (+King's Tomb)", {
        kr: "라스트라 숲 / 왕의무덤",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -317.28, y: 156.54, title: "To Solar Halo Hill", type: MarkerTypeEnum.Zoning,
                teleportTo: [-340.16, 178.35]},

            { x: -303.06, y: 152.81, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint1.jpg"},

            { x: -311.03, y: 161.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint2.jpg"},

            { x: -310.16, y: 163.06, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint3.jpg"},

            { x: -306.87, y: 163.91, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint4.jpg"},

            { x: -304.97, y: 164.09, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint5.jpg"},

            { x: -296.72, y: 164.16, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint6.jpg"},

            { x: -283.97, y: 169.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint7.jpg"},

            { x: -290.28, y: 131.13, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint8.jpg"},

            { x: -284, y: 138.04, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint9.jpg"},

            { x: -287.22, y: 141.47, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LastraMokokoHint10.jpg"},

            { x: -305.5, y: 163.25, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LastraSecretHint1.jpg"}
]
    });

})();