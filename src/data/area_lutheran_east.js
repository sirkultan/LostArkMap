(function(){

    let area = LAM.createArea("Lutheran East", {
        kr: "루테란 동부",
        path: "maps/areas/LutheranEast",
        zoomLevel: 5
    });

    area.registerMap("Castle of Lutheran", {
        kr: "루테란 성",
        img: "CastleOfLutheran.png",
        type: MapTypeEnum.City,
        markers: [
            { x: -368.84, y: 60.35, title: "To Diorika Plains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-357, 71.5]},

            { x: -371.37, y: 35.35, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint1.png"},

            { x: -363.16, y: 36.41, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint2.png"},

            { x: -360.5, y: 58.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint3.png"},

            { x: -351.59, y: 14.25, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint4.png"},

            { x: -352.03, y: 14.66, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint4.png"},

            { x: -345.28, y: 12.82, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint5.png"},

            { x: -342.94, y: 16.41, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.png"},

            { x: -343.22, y: 15.69, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.png"},

            { x: -343.69, y: 16.04, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/LutheranCastleMokokoHint6.png"},

            { x: -330.22, y: 27.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LutheranCastleMokokoHint7.png"},

            { x: -359.69, y: 56.97, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint1.png"},

            { x: -350.62, y: 13.97, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint2.png"},

            { x: -343.03, y: 19.1, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LutheranCastleSecretHint3.png"},

            { x: -347.12, y: 21.06, popupText: "상자 #1", type: MarkerTypeEnum.TreasureBox },

            { x: -341.16, y: 21.19, popupText: "하녀장의 은밀한...", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/LutheranCastleHiddenStoryHint1.png"},

            { x: -340.69, y: 39.91, popupText: "흙 묻은 칠색사탕", type: MarkerTypeEnum.CookingIngredient,
                hintImage: "lutheran/LutheranCastleCookingIngredientHint1.png"}
        ]
    });

    area.registerMap("Diorika Plains", {
        kr: "디오리카 평원",
        img: "DiorikaPlains.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -357, y: 71.5, title: "To Castle of Lutheran", type: MarkerTypeEnum.Zoning,
                teleportTo: [-368.84, 60.35]},

            { x: -357.69, y: 119.43, title: "To Solar Halo Hill", type: MarkerTypeEnum.Zoning,
                teleportTo: [-381.31, 159.11]},

            { x: -375.87, y: 90.53, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint1.png"},

            { x: -373.87, y: 90.47, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint2.png"},

            { x: -367.37, y: 83.54, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint3.png"},

            { x: -368.41, y: 106.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint4.png"},

            { x: -351.69, y: 82.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint5.png"},

            { x: -347.37, y: 92.22, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint6.png"},

            { x: -350.37, y: 103.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint7.png"},

            { x: -339.31, y: 69, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint8.png"},

            { x: -341.78, y: 89.72, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint9.png"},

            { x: -348.84, y: 116.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint10.png"},

            { x: -323.81, y: 110.1, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/DiorikaMokokoHint11.png"},

            { x: -353.69, y: 115.78, popupText: "절벽 위에서 바라본 로나운의 생가", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/DiorikaVistaHint1.png"},

            { x: -350.06, y: 115.16, popupText: "상자(낡은 금열쇠)", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/DiorikaTreasureHint1.png"},

            { x: -348.62, y: 114.35, popupText: "덩치 큰 까마귀", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/DiorikaBossHint1.png"},

            { x: -325.59, y: 104.78, popupText: "딱딱한 붉은 귀 이새", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/DiorikaBossHint2.png"}
        ]
    });

    area.registerMap("Solar Halo Hill", {
        kr: "해무리 언덕",
        img: "Solar Halo Hill.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -381.31, y: 159.11, title: "To Diorika Plains", type: MarkerTypeEnum.Zoning,
                teleportTo: [-357.69, 119.43]}
        ]
    });

    area.registerMap("Nursery Rhizome", {
        kr: "배꽃나무 자생지",
        img: "NurseryRhizome.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Black Rose Chapel", {
        kr: "흑장미 교회당",
        img: "BlackRoseChapel.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        img: "RiaMonogamies.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        img: "BoreaManor.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        img: "ManeWavesHarbor.png",
        type: MapTypeEnum.City,
        markers: [
        ]
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        img: "CrocniceBeach.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        img: "CryingStorm.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("교회당 지하", {
        kr: "흑장미 교회당",
        img: "교회당 지하.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("King's Tomb", {
        kr: "왕의무덤",
        img: ".png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("Lastra Forest", {
        kr: "라스트라 숲",
        img: "LastraForest.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();