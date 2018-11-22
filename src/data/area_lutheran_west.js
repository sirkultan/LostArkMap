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
        ]
    });

    area.registerMap("Medlinic Monastery", {
        kr: "메드리닉 수도원",
        type: MapTypeEnum.Continent,
        markers: [
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
        ]
    });

    area.registerMap("Gray Hammer Mine", {
        kr: "회색 망치 광산",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();