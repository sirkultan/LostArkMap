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

            { x: -308.12, y: 229.63, type: MarkerTypeEnum.TreasureMap,
                hintImage: "lutheran/TreasureMap2.jpg"},
        ]
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        type: MapTypeEnum.City,
        markers: [
        ]
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("교회당 지하", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Dungeon,
        markers: [
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