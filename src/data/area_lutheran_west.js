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

            { x: -354, y: 258.14, title: "To Medlinic Monastery", type: MarkerTypeEnum.Zoning,
                teleportTo: [-328.19, 260.57]},

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

            { x: -328.19, y: 260.57, title: "To Lake Bars", type: MarkerTypeEnum.Zoning,
                teleportTo: [-354, 258.14]},

            { x: -180.81, y: 254.51, title: "To Vilblin Forest", type: MarkerTypeEnum.Zoning,
                teleportTo: [-158.19, 248.51]},

            { x: -312.31, y: 257.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint1.jpg"},

            { x: -294.56, y: 265.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint2.jpg"},

            { x: -279.56, y: 274.63, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint3.jpg"},

            { x: -265.25, y: 288.44, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint4.jpg"},

            { x: -258.69, y: 275.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint5.jpg"},

            { x: -253.12, y: 239.51, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint6.jpg"},

            { x: -253, y: 240.88, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint6.jpg"},

            { x: -228.87, y: 202.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint7.jpg"},

            { x: -234.44, y: 285.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint8.jpg"},

            { x: -245.25, y: 290.07, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint9.jpg"},

            { x: -184.69, y: 265.76, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/MedlinicMokokoHint10.jpg"},

            { x: -298.19, y: 273.69, popupText: "광기어린 어둠의 바위", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/MedlinicBossHint1.jpg"},

            { x: -260, y: 235.82, popupText: "광기어린 정령", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/MedlinicBossHint2.jpg"},

            { x: -235.19, y: 282.13, popupText: "우두머리 붉은 독 메뚜기 #1", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/MedlinicBossHint3.jpg"},

            { x: -194.69, y: 264.88, popupText: "우두머리 독 메뚜기 #2", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/MedlinicBossHint4.jpg"},

            { x: -255.44, y: 238.76, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/MedlinicSecretHint1.jpg"},

            { x: -267.25, y: 259.75, popupText: "특제 계란덮밥 레시피", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레이크바 요리사NPC - 헬렌<br>에펜 계란덮밥 재료",
                hintImage: "lutheran/MedlinicFoodIngredientHint1.jpg"},

            { x: -265.81, y: 265.63, popupText: "영웅의 조건 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/MedlinicHiddenStory1.jpg"},

            { x: -289.81, y: 232.95, popupText: "공명의 노래", type: MarkerTypeEnum.PlayInstrument,
                hintImage: "lutheran/MedlinicPlayInstrumentHint1.jpg"},

            { x: -221.87, y: 221.75, popupText: "메드리닉 대교", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/MedlinicVistaHint1.jpg"},

            { x: -309.31, y: 252.26, type: MarkerTypeEnum.TreasureMap,
                hintText: "Might need special action to activate",
                hintImage: "lutheran/TreasureMap1.jpg"},
        ]
    });

    area.registerMap("Vilblin Forest", {
        kr: "빌브린숲",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -158.19, y: 248.51, title: "To Medlinic Monastery", type: MarkerTypeEnum.Zoning,
                teleportTo: [-180.81, 254.51]},

            { x: -89, y: 320.01, title: "To Plains of Battle", type: MarkerTypeEnum.Zoning,
                teleportTo: [-72.75, 356.75]},

            { x: -100.12, y: 190.51, title: "Gray Hammer Mine Dungeon", type: MarkerTypeEnum.Zoning,
                teleportTo: [-163.75, 58.05]},

            { x: -138.25, y: 271.57, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint1.jpg"},

            { x: -130.56, y: 249.38, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint2.jpg"},

            { x: -120.56, y: 284.94, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint3.jpg"},

            { x: -90.5, y: 247.31, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint4.jpg"},

            { x: -91.44, y: 255.06, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint5.jpg"},

            { x: -68.25, y: 267.27, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint6.jpg"},

            { x: -51.06, y: 220.01, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint7.jpg"},

            { x: -25.94, y: 259.32, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint8.jpg"},

            { x: -35.25, y: 284, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/VilblinMokokoHint9.jpg"},

            { x: -133.19, y: 246.63, popupText: "우두머리 붉은털 바위곰", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/VilblinBossHint1.jpg"},

            { x: -114.31, y: 284.19, popupText: "날렵한 라쿠니", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/VilblinBossHint2.jpg"},

            { x: -74.56, y: 289.26, popupText: "우두머리 달빛 늑대", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/VilblinBossHint3.jpg"},

            { x: -48.25, y: 226.44, popupText: "붉은손 마도사", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/VilblinBossHint4.jpg"},

            { x: -19.62, y: 258.25, popupText: "붉은손 마도사", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/VilblinBossHint5.jpg"},

            { x: -90.56, y: 213.38, popupText: "로블롬", type: MarkerTypeEnum.WorldBoss,
                hintImage: "lutheran/VilblinWorldBossHint1.jpg"},

            { x: -138.69, y: 277.88, popupText: "식인곰의 웅담", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레이크바 요리사NPC - 헬렌<br>식인곰의 웅담 꼬치",
                hintImage: "lutheran/VilblinFoodIngredientHint1.jpg"},

            { x: -89.5, y: 215.26, popupText: "로블롬의 촉수", type: MarkerTypeEnum.FoodIngredient,
                hintText: "로블롬을 잡고 나온 촉수를 인벤토리에서 일정 시간동안 보유하고 있으면 파닥거리는 촉수 회로 변환된다.<br>이 때 먹으면 모험의 서가 등록된다.",
                hintImage: "lutheran/VilblinFoodIngredientHint2.jpg"},

            { x: -110.37, y: 294.19, popupText: "잃어버린 편지 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/VilblinHiddenStoryHint1.jpg"},

            { x: -116.37, y: 226.19, popupText: "영웅의 조건 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/VilblinHiddenStoryHint2.jpg"},

            { x: -110.87, y: 223.13, popupText: "잃어버린 편지 #1", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/VilblinHiddenStoryHint3.jpg"},

            { x: -87.81, y: 214.69, popupText: "NOTSET", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/VilblinHiddenStoryHint4.jpg"},

            { x: -114.31, y: 291.13, popupText: "라쿠니 숲", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/VilblinVistaHint1.jpg"},
        ]
    });

    area.registerMap("Plains of Battle", {
        kr: "격전의 평야",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -72.75, y: 356.75, title: "To Vilblin Forest", type: MarkerTypeEnum.Zoning,
                teleportTo: [-89, 320.01]},

            { x: -37, y: 473.14, title: "To Castle of Lutheran", type: MarkerTypeEnum.Zoning,
                teleportTo: [-376.31, 47.44],
                teleportArea: "Lutheran East"},

            { x: -105.5, y: 381.31, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint1.jpg"},

            { x: -82.87, y: 390.24, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint2.jpg"},

            { x: -60.94, y: 386.06, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint3.jpg"},

            { x: -107.69, y: 420.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint4.jpg"},

            { x: -113.69, y: 448, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint5.jpg"},

            { x: -47.44, y: 462.19, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint6.jpg"},

            { x: -73.5, y: 505.75, type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/PlainsMokokoHint7.jpg"},

            { x: -85.5, y: 367.31, popupText: "광기어린 정령", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/PlainsBossHint1.jpg"},

            { x: -85.87, y: 471.32, popupText: "가려진 혼돈의 지옥개", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/PlainsBossHint2.jpg"},

            { x: -110.81, y: 385.74, popupText: "NOTSET", type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/PlainsTreasureHint1.jpg"},

            { x: -72.5, y: 436.32, popupText: "격전의 평야", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/PlainsVistaHint1.jpg"},

            { x: -72.69, y: 442.88, popupText: "영웅의 조건 #4", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/PlainsHiddenStoryHint1.jpg"},

            { x: -84.06, y: 468.13, popupText: "섭정님 귀는 당나귀 귀", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/PlainsHiddenStoryHint2.jpg"},
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
            { x: -163.75, y: 58.05, title: "To Vilblin Forest", type: MarkerTypeEnum.Zoning,
                teleportTo: [-100.12, 190.51]},

            { x: -122.75, y: 113.51, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint1.jpg"},

            { x: -111.12, y: 93.14, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint2.jpg"},

            { x: -104, y: 108.51, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint3.jpg"},

            { x: -102.19, y: 144.94, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint4.jpg"},

            { x: -105.12, y: 148.37, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint4.jpg"},

            { x: -68.44, y: 116.44, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint5.jpg"},

            { x: -75, y: 87.7, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint6.jpg"},

            { x: -37, y: 50.32, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint7.jpg"},

            { x: -13.19, y: 68.76, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint8.jpg"},

            { x: -41, y: 85.94, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint9.jpg"},

            { x: -43.81, y: 100.63, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint10.jpg"},

            { x: -7.87, y: 109.81, popupText: "NOTSET", type: MarkerTypeEnum.Mokoko,
                hintImage: "lutheran/GrayHammerMokokoHint11.jpg"},

            { x: -108.81, y: 131.75, popupText: "광기어린 어둠의 바위", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/GrayHammerBossHint1.jpg"},

            { x: -63.31, y: 127.75, popupText: "정예 회색망치 탐색꾼", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/GrayHammerBossHint2.jpg"},

            { x: -19.94, y: 64.82, popupText: "정예 회색 망치 강도", type: MarkerTypeEnum.Boss,
                hintImage: "lutheran/GrayHammerBossHint3.jpg"},

            { x: -118.37, y: 100.64, type: MarkerTypeEnum.SecretPassage,
                hintImage: "lutheran/GrayHammerSecretHint1.jpg"},

            { x: -106.37, y: 136.5, type: MarkerTypeEnum.SecretPassage,
                hintText: "주변 적 처리 후 부숴서 들어갈 수 있음<br>단상위에있는 반딧불을 들고 비밀길#2로 가자",
                hintImage: "lutheran/GrayHammerSecretHint2.jpg"},

            { x: -105.37, y: 109.57, type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/GrayHammerTreasureHint1.jpg"},

            { x: -60.87, y: 131.57, type: MarkerTypeEnum.TreasureBox,
                hintImage: "lutheran/GrayHammerTreasureHint2.jpg"},

            { x: -59.62, y: 111.07, popupText: "회색망치 광산", type: MarkerTypeEnum.Vista,
                hintImage: "lutheran/GrayHammerVistaHint1.jpg"},

            { x: -157.87, y: 43.52, popupText: "손은 눈보다 빠르다 #1", type: MarkerTypeEnum.HiddenStory,
                hintText: "시간제한 10분",
                hintImage: "lutheran/GrayHammerHiddenStory1.jpg"},

            { x: -133, y: 107.26, popupText: "손은 눈보다 빠르다 #2", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/GrayHammerHiddenStory2.jpg"},

            { x: -23.75, y: 113.44, popupText: "손은 눈보다 빠르다 #5", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/GrayHammerHiddenStory3.jpg"},

            { x: -17.31, y: 94.31, popupText: "손은 눈보다 빠르다 #3", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/GrayHammerHiddenStory4.jpg"},

            { x: -12.56, y: 113.81, popupText: "손은 눈보다 빠르다 #4", type: MarkerTypeEnum.HiddenStory,
                hintImage: "lutheran/GrayHammerHiddenStory5.jpg"},

            { x: -98.5, y: 132.69, popupText: "열리지 않는 럼주", type: MarkerTypeEnum.FoodIngredient,
                hintText: "레이크바 요리사NPC - 헬렌<br>모험의 서 요리로 제작 가능",
                hintImage: "lutheran/GrayHammerFoodIngredientHint1.jpg"}
        ]
    });

})();