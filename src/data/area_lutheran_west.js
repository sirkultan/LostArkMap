(function(){

    let area = LAM.createArea("Lutheran West", {
        kr: "루테란 서부",
        path: "maps/areas/LutheranWest",
        zoomLevel: 4
    });

    area.registerMap("Zagoras Mountain", {
        kr: "자고라스 산",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -489.12, y: 438.14, title: "To Ozhorn Hills (Yudia)", type: MarkerTypeEnum.Zoning,
                teleportTo: [-43.31, 277.19],
                teleportArea: "Yudia"},

            { x: -438.5, y: 359.26, title: "To Lake Bars", type: MarkerTypeEnum.Zoning,
                teleportTo: [-421.12, 324.14]},

            { x: -431.31, y: 376.69, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint1.jpg"},

            { x: -448.37, y: 402.56, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint2.jpg"},

            { x: -482.69, y: 424.07, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint3.jpg"},

            { x: -482.87, y: 422.76, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint3.jpg"},

            { x: -482, y: 423.38, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint3.jpg"},

            { x: -475.44, y: 431.38, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint4.jpg"},

            { x: -459.62, y: 440.25, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint5.jpg"},

            { x: -394.56, y: 410.13, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint6.jpg"},

            { x: -393.62, y: 410.19, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint6.jpg"},

            { x: -392.69, y: 410.25, type: MarkerTypeEnum.Mokoko,
                hintText: "3 seeds at this location",
                hintImage: "lutheran/ZagorasMokokoHint6.jpg"},

            { x: -396.06, y: 466.38, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint7.jpg"},

            { x: -421.31, y: 493.81, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/ZagorasMokokoHint8.jpg"},

            { x: -463.37, y: 443.44, popupText: "우두머리 호수 멧돼지", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/ZagorasBossHint1.jpg"},

            { x: -419.5, y: 453.94, popupText: "우두머리 갈기 호랑이", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/ZagorasBossHint2.jpg"},

            { x: -397.31, y: 473.5, popupText: "원통한 망령의 기사", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/ZagorasBossHint3.jpg"},

            { x: -467.25, y: 449.38, popupText: "멧돼지 통 바비큐", type: MarkerTypeEnum.CookingIngredient,
                hintImage: "lutheran/ZagorasCookingIngredientHint1.jpg"},

            { x: -429.5, y: 436.94, popupText: "자고라스 요새 입구", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/ZagorasVistaHint1.jpg"},

            { x: -416.37, y: 444.32, popupText: "상자(랜덤)", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/ZagorasTreasureHint1.jpg"},

            { x: -416.69, y: 415.13, popupText: "우물 기담 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/ZagorasHiddenStoryHint1.jpg"},

            { x: -408, y: 418.82, popupText: "기사의 맹세", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/ZagorasHiddenStoryHint2.jpg"},

            { x: -409.56, y: 423.69, popupText: "우물 기담 #1", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/ZagorasHiddenStoryHint3.jpg"},

            { x: -384.5, y: 461.5, popupText: "우물 기담 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/ZagorasHiddenStoryHint4.jpg"},

            { x: -412.56, y: 419.94, popupText: "비석에 새겨진 마음", type: MarkerTypeEnum.OtherStory,
                hintImage: "lutheran/ZagorasOtherStoryHint1.jpg"},

            { x: -479.75, y: 424.44, popupText: "Barrier blocking access to 3 Mokoko Seeds", type: MarkerTypeEnum.SecretPassage,
                hintText: "Barrier has to be broken by attacking<br>will take a long time even with several people<br>(10-15 minutes at times)",
                hintImage: "lutheran/ZagorasSecretHint1.jpg"},

            { x: -393.69, y: 408.38, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/ZagorasSecretHint2.jpg"},

            { x: -396.06, y: 413.32, popupText: "Secret Fishing Place", type: MarkerTypeEnum.SecretPassage,
                hintText: "Special Fishing spot where certain special fish can be caught",
                hintImage: "lutheran/ZagorasSecretHint3.jpg"}
        ]
    });

    area.registerMap("Lake Bars", {
        kr: "레이크바",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -421.12, y: 324.14, title: "To Zagoras Mountain", type: MarkerTypeEnum.Zoning,
                teleportTo: [-438.5, 359.26]},

            { x: -429, y: 180.07, title: "Ridge of Brilliance Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-468.5, 110.8]},

            { x: -443.87, y: 304.77, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint1.jpg"},

            { x: -483.75, y: 268.78, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint2.jpg"},

            { x: -479.37, y: 255.16, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint3.jpg"},

            { x: -470.25, y: 230.29, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint4.jpg"},

            { x: -453.87, y: 244.41, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint5.jpg"},

            { x: -425.87, y: 238.66, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint6.jpg"},

            { x: -386.5, y: 246.25, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/LakeBarsMokokoHint7.jpg"},

            { x: -391.62, y: 290.07, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LakeBarsMokokoHint8.jpg"},

            { x: -391.62, y: 292.51, type: MarkerTypeEnum.Mokoko,
                hintText: "2 seeds at this location",
                hintImage: "lutheran/LakeBarsMokokoHint8.jpg"},

            { x: -422.25, y: 268.28, popupText: "영웅의 조건 #1", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/LakeBarsHiddenStoryHint1.jpg"},

            { x: -475.62, y: 268.53, popupText: "정예 습격대 보급병", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/LakeBarsBossHint1.jpg"},

            { x: -425.5, y: 187.52, popupText: "흉폭한 붉은 크란", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/LakeBarsBossHint2.jpg"},

            { x: -498.87, y: 254.28, popupText: "황금상자 #1", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/LakeBarsTreasureHint1.jpg"},

            { x: -456, y: 246.28, popupText: "루테란의 보부상", type: MarkerTypeEnum.OtherStory,
                hintImage: "lutheran/LakeBarsOtherStoryHint1.jpg"},

            { x: -447.25, y: 222.16, popupText: "Minuet of the forest #1", type: MarkerTypeEnum.PlayInstrument,
                hintText: "Play 'Minuet of the forest' (숲의 미뉴에트)",
                hintImage: "lutheran/LakeBarsPlayInstrumentHint1.jpg"},

            { x: -426.62, y: 210.17, popupText: "천둥날개", type: MarkerTypeEnum.WorldBoss,
                hintImage: "lutheran/LakeBarsWorldBossHint1.jpg"},

            { x: -389.31, y: 271.75, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/LakeBarsSecretHint1.jpg"},

            { x: -393.62, y: 290.43, popupText: "레이크바 고목", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/LakeBarsVistaHint1.jpg"},
        ]
    });

    area.registerMap("Medlinic Monastery", {
        kr: "메드리닉 수도원",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -309.31, y: 252.26, type: MarkerTypeEnum.TreasureMap,
                hintText: "Might need special action to activate",
                hintImage: "lutheran/TreasureMap1.jpg"},
        ]
    });

    area.registerMap("Vilblin Forest", {
        kr: "빌브린숲",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Plains of Battle", {
        kr: "격전의 평야",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Ridge of Brilliance", {
        kr: "광휘의 능선",
        type: MapTypeEnum.Dungeon,
        markers: [
            { x: -468.5, y: 110.8, title: "To Lake Bars", type: MarkerTypeEnum.Zoning,
                teleportTo: [-429, 180.07]},

            { x: -455.12, y: 113.65, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint1.jpg"},

            { x: -451, y: 92.28, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint2.jpg"},

            { x: -456.62, y: 65.16, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint3.jpg"},

            { x: -414.5, y: 26.17, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint4.jpg"},

            { x: -415.69, y: 23.14, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint4.jpg"},

            { x: -417.31, y: 22.51, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint4.jpg"},

            { x: -398.25, y: 41.13, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/RidgeMokokoHint5.jpg"},

            { x: -419.5, y: 31.91, type: MarkerTypeEnum.SecretPassage,
                hintText: "Kill nearby monsters and the path will open",
                hintImage: "lutheran/RidgeSecretHint1.jpg"},

            { x: -413.62, y: 24.7, popupText: "상자(랜덤)", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/RidgeTreasureHint1.jpg"},

            { x: -364.37, y: 86.94, popupText: "루테란 대왕비", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/RidgeVistaHint1.jpg"},
        ]
    });

    area.registerMap("Gray Hammer Mine", {
        kr: "회색 망치 광산",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();