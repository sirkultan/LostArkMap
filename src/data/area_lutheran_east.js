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
            {
                "x": -366.8118812823637,
                "y": 52.06703051879273,
                "title": "To Diorika Plains",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -357,
                    71.5
                ]
            },
            {
                "x": -376.2812404812671,
                "y": 42.315303792762286,
                "title": "To Plains of Battle",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -37,
                    473.14
                ],
                "teleportArea": "Lutheran West"
            },
            {
                "x": -371.62507614986293,
                "y": 31.627034459382394,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LutheranCastleMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -362.09342636308253,
                "y": 31.408985407572963,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LutheranCastleMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -363.78224946695093,
                "y": 46.9124217633365,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LutheranCastleMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -351.37493336886996,
                "y": 11.376572859354454,
                "type": MarkerTypeEnum.Mokoko,
                "hintText": "2 seeds at this location",
                "hintImage": "lutheran/LutheranCastleMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -351.96873096253427,
                "y": 12.032686088975806,
                "type": MarkerTypeEnum.Mokoko,
                "hintText": "2 seeds at this location",
                "hintImage": "lutheran/LutheranCastleMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -345.6563642247944,
                "y": 7.3779747557356,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LutheranCastleMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -340.7180741699665,
                "y": 11.471451214978302,
                "type": MarkerTypeEnum.Mokoko,
                "hintText": "3 seeds at this location",
                "hintImage": "lutheran/LutheranCastleMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -341.0931027261651,
                "y": 10.659002503870298,
                "type": MarkerTypeEnum.Mokoko,
                "hintText": "3 seeds at this location",
                "hintImage": "lutheran/LutheranCastleMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -341.7181503198294,
                "y": 10.971519600167628,
                "type": MarkerTypeEnum.Mokoko,
                "hintText": "3 seeds at this location",
                "hintImage": "lutheran/LutheranCastleMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -324.9984103716113,
                "y": 19.31680826692742,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LutheranCastleMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -362.96974946695093,
                "y": 46.28709693368721,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/LutheranCastleSecretHint1.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -350.0623286628084,
                "y": 11.064089955651784,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/LutheranCastleSecretHint2.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -340.467969463905,
                "y": 14.283882829788979,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/LutheranCastleSecretHint3.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -344.65549802010355,
                "y": 16.75235928903168,
                "popupText": "상자 #1",
                "type": MarkerTypeEnum.TreasureBox,
                "title": "Treasure Box"
            },
            {
                "x": -338.2178552391106,
                "y": 15.690508948330262,
                "popupText": "하녀장의 은밀한...",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/LutheranCastleHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -335.77975555894,
                "y": 31.348434385468703,
                "popupText": "흙 묻은 칠색사탕",
                "type": MarkerTypeEnum.CookingIngredient,
                "hintImage": "lutheran/LutheranCastleCookingIngredientHint1.jpg",
                "title": "Cooking Ingredient"
            }
        ]
    });

    area.registerMap("Diorika Plains", {
        kr: "디오리카 평원",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -362.7517514468474,
                "y": 76.18493555540034,
                "title": "To Castle of Lutheran",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -368.84,
                    60.35
                ]
            },
            {
                "x": -352.4046413341456,
                "y": 116.62653866675979,
                "title": "To Solar Halo Hill",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -381.31,
                    159.11
                ]
            },
            {
                "x": -375.1560310691441,
                "y": 96.40303589610176,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -372.90595491928116,
                "y": 96.15313847388575,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -369.62568534876635,
                "y": 88.80961072575106,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -364.5300696771246,
                "y": 108.59284389624145,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -355.28234465427965,
                "y": 84.40524131845747,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -349.7507234236978,
                "y": 91.28176288891993,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -349.74980962534266,
                "y": 101.56362835562385,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -348.19020332013406,
                "y": 69.31232903702669,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -345.6574303228754,
                "y": 87.7198441630292,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -345.12386727078894,
                "y": 112.06506444459966,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -324.59398796832164,
                "y": 100.34908404476728,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/DiorikaMokokoHint11.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -349.6862816021931,
                "y": 112.47056220751709,
                "popupText": "절벽 위에서 바라본 로나운의 생가",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/DiorikaVistaHint1.jpg",
                "title": "Vista"
            },
            {
                "x": -346.68647197685044,
                "y": 110.84610928903169,
                "popupText": "상자(낡은 금열쇠)",
                "type": MarkerTypeEnum.TreasureBox,
                "hintImage": "lutheran/DiorikaTreasureHint1.jpg",
                "title": "Treasure Box"
            },
            {
                "x": -345.59282668291195,
                "y": 110.12730800013969,
                "popupText": "덩치 큰 까마귀",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/DiorikaBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -328.1882900548279,
                "y": 96.31713309657671,
                "popupText": "딱딱한 붉은 귀 이새",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/DiorikaBossHint2.jpg",
                "title": "Boss"
            }
        ]
    });

    area.registerMap("Solar Halo Hill", {
        kr: "해무리 언덕",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -375.5607485531526,
                "y": 160.43678195551212,
                "title": "To Diorika Plains",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -357.69,
                    119.43
                ]
            },
            {
                "x": -338.24941935729515,
                "y": 172.53442991130356,
                "title": "Lastra Forest (+Kings Tomb) Dungeon",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -317.28,
                    156.54
                ]
            },
            {
                "x": -346.6863958269875,
                "y": 177.34681023722226,
                "title": "To Nursery Rhizome",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -381.19,
                    223.66
                ]
            },
            {
                "x": -356.74986673773986,
                "y": 138.27966004434822,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -364.56152908924764,
                "y": 149.87416228143078,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -351.24970491928116,
                "y": 150.156403866676,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -353.7493908010966,
                "y": 155.2815748296493,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -347.6870526195553,
                "y": 157.4697415852452,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -359.43642438318614,
                "y": 159.34400644445998,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -356.1864814955833,
                "y": 162.12582062227187,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -368.0607771093512,
                "y": 169.00073514078522,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -360.5293081784953,
                "y": 177.9082844593824,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -341.3745526195553,
                "y": 166.00241057792368,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/SolarMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -366.4365481267134,
                "y": 151.87421357032278,
                "popupText": "슈헤리트단 검투사",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/SolarBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -332.5938642247944,
                "y": 161.03369477051834,
                "popupText": "윌리윌리",
                "type": MarkerTypeEnum.WorldBoss,
                "hintImage": "lutheran/SolarWorldBossHint1.jpg",
                "title": "World Boss"
            },
            {
                "x": -352.1563547060615,
                "y": 137.56126906659216,
                "popupText": "호박당의 숭고한 의식",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/SolarHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -344.99963828815106,
                "y": 160.00128222229984,
                "popupText": "해바라기 밭",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/SolarVistaHint1.jpg",
                "title": "Vista"
            }
        ]
    });

    area.registerMap("Nursery Rhizome", {
        kr: "배꽃나무 자생지",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -377.43635775205604,
                "y": 225.24914518513344,
                "title": "To Solar Halo Hill",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -350.31,
                    182.94
                ]
            },
            {
                "x": -326.68864224794396,
                "y": 219.94153472617012,
                "title": "To Black Rose Chapel",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -312.53,
                    224.28
                ]
            },
            {
                "x": -373.84289331404204,
                "y": 222.40548066662012,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -364.9061928876028,
                "y": 215.78125,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -353.56302353030765,
                "y": 213.71998093340784,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -348.9070590922936,
                "y": 210.56424382232777,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -355.06364224794396,
                "y": 201.53217320005587,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -360.4994003198294,
                "y": 226.90695094819057,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -358.9984103716113,
                "y": 243.21987835562385,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -353.62325807188546,
                "y": 248.03299382232777,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -337.3130520865062,
                "y": 221.53439571870894,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -332.21937823636915,
                "y": 224.06598764465554,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/NurseryMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -368.31257614986293,
                "y": 210.34349355554002,
                "popupText": "징그러운 과수원 바구미",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/NurseryBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -366.656392780993,
                "y": 210.99998290370266,
                "popupText": "나무에 담긴 마음 #3",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/NurseryHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -366.46845491928116,
                "y": 217.156096133324,
                "popupText": "나무에 담긴 마음 #1",
                "type": MarkerTypeEnum.HiddenStory,
                "hintText": "시간제한이 40초로 굉장히 빡빡하니<br>서두르시는게 좋습니다",
                "hintImage": "lutheran/NurseryHiddenStoryHint2.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -362.593607219007,
                "y": 218.31287611854128,
                "popupText": "나무에 담긴 마음 #2",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/NurseryHiddenStoryHint3.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -337.5633376484922,
                "y": 219.59681023722226,
                "type": MarkerTypeEnum.HiddenQuest,
                "hintImage": "lutheran/NurseryHiddenQuest1.jpg",
                "title": "Hidden Quest"
            },
            {
                "x": -337.84474946695093,
                "y": 214.15924185203295,
                "popupText": "폐허가 된 마을",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/NurseryVistaHint1.jpg",
                "title": "Vista"
            }
        ]
    });

    area.registerMap("Black Rose Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -308.74885775205604,
                "y": 220.002325096437,
                "title": "To Nursery Rhizome",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -322.91,
                    227.31
                ]
            },
            {
                "x": -284.4378426743832,
                "y": 247.31612441503415,
                "title": "To Ria Monogamies",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -292.97,
                    266.82
                ]
            },
            {
                "x": -280.37473347547973,
                "y": 198.25030773335197,
                "title": "Underground Chapel Dungeon",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -230.19,
                    205.51
                ]
            },
            {
                "x": -291.68753807493147,
                "y": 234.75258154089698,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -300.4052410143162,
                "y": 210.50179511121976,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -294.06187176363085,
                "y": 211.18917543713843,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -293.9681027261651,
                "y": 211.65794253343577,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -292.8430170575693,
                "y": 209.53258351119183,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -293.53045042643924,
                "y": 203.93886770378649,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -293.65550753883645,
                "y": 202.47011770378649,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -292.24924802010355,
                "y": 200.90749802970515,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -287.155964438014,
                "y": 213.9700151260025,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -281.65621192506853,
                "y": 209.9384402963532,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -277.5940831556503,
                "y": 217.06361125932654,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -271.84394037465734,
                "y": 200.62513677037865,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint11.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -265.21993984160827,
                "y": 226.34487835562385,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BlackRoseMokokoHint12.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -287.7501998933902,
                "y": 239.69023540757297,
                "popupText": "거대 흑장미무늬 거미",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BlackRoseBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -275.12501903746573,
                "y": 201.1877735407573,
                "popupText": "음흉한 사교도 전도자",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BlackRoseBossHint2.jpg",
                "title": "Boss"
            },
            {
                "x": -287.1247715504112,
                "y": 216.68900447416513,
                "popupText": "흑장미의 이름",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/BlackRoseHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -294.7490481267134,
                "y": 205.1887138371105,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/BlackRoseSecretHint1.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -263.5324303228754,
                "y": 226.2822928741372,
                "popupText": "절벽 무덤",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/BlackRoseVistaHint1.jpg",
                "title": "Vista"
            },
            {
                "x": -306.06187176363085,
                "y": 224.94006444459967,
                "type": MarkerTypeEnum.TreasureMap,
                "hintImage": "lutheran/TreasureMap2.jpg",
                "title": "Treasure Map"
            }
        ]
    });

    area.registerMap("Ria Monogamies", {
        kr: "라이아 단구",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -298.50167529698444,
                "y": 267.4371580740534,
                "title": "To Black Rose Chapel",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -283.34,
                    253.91
                ]
            },
            {
                "x": -276.93647197685044,
                "y": 311.0629445037306,
                "title": "To Borea Manor",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -310.5,
                    340.35
                ]
            },
            {
                "x": -299.1891562595187,
                "y": 267.18714097775603,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -314.1886232104782,
                "y": 282.06010651837363,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -299.09405459945174,
                "y": 293.49885454807884,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -287.0621573256168,
                "y": 300.7809764592427,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -280.8444163113006,
                "y": 281.5322415852452,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -279.84407363691747,
                "y": 288.18837191116387,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -272.0318496801706,
                "y": 271.09465610375855,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -268.93830909229365,
                "y": 276.5335067112477,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/RiaMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -288.6568401614377,
                "y": 285.3754445037306,
                "popupText": "광기에 물든 홍학 우두머리",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/RiaBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -300.687642780993,
                "y": 296.0296942369429,
                "popupText": "마군단 거인병 우두머리",
                "type": MarkerTypeEnum.Boss,
                "title": "Boss"
            },
            {
                "x": -278.8444067925678,
                "y": 282.6884915852452,
                "popupText": "지배당한 물 회오리 정령",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/RiaBossHint3.jpg",
                "title": "Boss"
            },
            {
                "x": -272.59375951873284,
                "y": 291.65754931859715,
                "popupText": "지배당한 거대 푸름 전사",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/RiaBossHint4.jpg",
                "title": "Boss"
            },
            {
                "x": -289.6574683978069,
                "y": 273.7504445037306,
                "popupText": "천재의 비애",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/RiaHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -276.9693020865062,
                "y": 282.75109416302917,
                "popupText": "푸름의 기원#2",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/RiaHiddenStoryHint2.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -271.9696542796223,
                "y": 276.5020002667877,
                "popupText": "푸름의 기원 #1",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/RiaHiddenStoryHint3.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -271.0005616052391,
                "y": 281.4081134964091,
                "popupText": "푸름의 기원 #3",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/RiaHiddenStoryHint4.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -264.7816878617119,
                "y": 282.7211605779237,
                "popupText": "푸름의 기원 #4",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/RiaHiddenStoryHint5.jpg",
                "title": "Hidden Story"
            },
            {
                "x": -292.18886117879987,
                "y": 272.0312329037027,
                "popupText": "아제나포리움",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/RiaVistaHint1.jpg",
                "title": "Vista"
            },
            {
                "x": -273.2193687176363,
                "y": 270.5941774074333,
                "popupText": "푸름의 땅 폭포",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/RiaVistaHint2.jpg",
                "title": "Vista"
            },
            {
                "x": -270.5946542796223,
                "y": 274.5021883260584,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/RiaSecretHint1.jpg",
                "title": "Secret Passage"
            }
        ]
    });

    area.registerMap("Borea Manor", {
        kr: "보레아 영지",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -311.12519037465734,
                "y": 345.62212782204836,
                "title": "To Ria Monogamies",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -280.34,
                    311.88
                ]
            },
            {
                "x": -276.43713828815106,
                "y": 370.4976065183737,
                "title": "To Mane Waves Harbor",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -291.12,
                    400.07
                ]
            },
            {
                "x": -301.4690926743832,
                "y": 342.3102603850497,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -296.5006758300335,
                "y": 332.3110126221322,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -294.6876998933902,
                "y": 347.0289932887523,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -292.18714780688396,
                "y": 363.27834362945373,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -284.34433064270485,
                "y": 336.78015583697083,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -285.5003997867804,
                "y": 340.1235639110242,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -282.15649748705454,
                "y": 348.4358929480509,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -276.5943020865062,
                "y": 338.2179635703228,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -269.53154508071884,
                "y": 348.4991622814308,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/BoreaManorMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -288.5632900548279,
                "y": 330.71774131845746,
                "popupText": "잔인한 트릴",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BoreaManorBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -275.3445210173622,
                "y": 333.3432542073774,
                "popupText": "폭주한 마법사 임프",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BoreaManorBossHint2.jpg",
                "title": "Boss"
            },
            {
                "x": -272.5629949741091,
                "y": 343.5305832444041,
                "popupText": "폭주한 이카루스",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BoreaManorBossHint3.jpg",
                "title": "Boss"
            },
            {
                "x": -270.90606914407556,
                "y": 360.21716004434825,
                "popupText": "고독한 게르드",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/BoreaManorBossHint4.jpg",
                "title": "Boss"
            },
            {
                "x": -282.46876903746573,
                "y": 355.7792155406176,
                "popupText": "Minuet of the Forest",
                "type": MarkerTypeEnum.PlayInstrument,
                "hintText": "Play Minuet of the forest at this location (숲의 미뉴에트)",
                "hintImage": "lutheran/BoreaManorPlayInstrumentHint1.jpg",
                "title": "Play Instrument"
            },
            {
                "x": -276.1879759366433,
                "y": 338.6866622814308,
                "popupText": "폐허가 된 요새",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/BoreaManorVistaHint1.jpg",
                "title": "Vista"
            },
            {
                "x": -289.4069067925678,
                "y": 334.74876906659216,
                "type": MarkerTypeEnum.HiddenQuest,
                "hintImage": "lutheran/BoreaManorHiddenQuestHint1.jpg",
                "title": "Hidden Quest"
            }
        ]
    });

    area.registerMap("Mane Waves Harbor", {
        kr: "갈기파도 항구",
        type: MapTypeEnum.City,
        markers: [
            {
                "x": -293.00057112397195,
                "y": 398.6257864296772,
                "title": "To Borea Manor",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -277.62,
                    366.13
                ]
            },
            {
                "x": -303.93757614986293,
                "y": 405.5001367703786,
                "title": "To Crocnice Beach",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -363,
                    390.51
                ]
            },
            {
                "x": -284.1876142247944,
                "y": 437.0628761185413,
                "popupText": "To World",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -360.5,
                    323.76
                ],
                "teleportArea": "World",
                "title": "Zone change"
            },
            {
                "x": -291.43786171184894,
                "y": 403.9384232000559,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -288.562785561986,
                "y": 410.0634915852452,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -292.93769037465734,
                "y": 418.18825223708257,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -285.750285561986,
                "y": 419.5631838518932,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -279.813280536095,
                "y": 403.50112835562385,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -274.68858513554676,
                "y": 398.7514702815705,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ManeWavesMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -276.31341379835516,
                "y": 387.75119674081316,
                "popupText": "귀족의 삶",
                "type": MarkerTypeEnum.HiddenStory,
                "hintImage": "lutheran/ManeWavesHiddenStoryHint1.jpg",
                "title": "Hidden Story"
            }
        ]
    });

    area.registerMap("Crocnice Beach", {
        kr: "크로커니스 해변",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -362.56236673773986,
                "y": 391.062192266648,
                "title": "To Mane Waves Harbor",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -303.69,
                    405.75
                ]
            },
            {
                "x": -327.2507043862321,
                "y": 434.7486664888082,
                "title": "Crying Storm Dungeon",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -359.22,
                    458.03
                ]
            },
            {
                "x": -331.71915930551324,
                "y": 428.0302584147548,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -340.2504473804447,
                "y": 427.9365084147548,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -337.6252760432531,
                "y": 417.74875197029485,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -340.31273796832164,
                "y": 416.46782679994413,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -354.6254949741091,
                "y": 425.9683567851614,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -353.6564213371916,
                "y": 416.2808225925667,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -361.2817259366433,
                "y": 424.906147422216,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -351.0314213371916,
                "y": 411.59316872589073,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -348.53,
                "y": 405.13,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -348.53,
                "y": 404.57,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -352.12479058787693,
                "y": 405.4056345332961,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -352.4375095187329,
                "y": 405.1245042073774,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -363.28,
                "y": 404.1,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint11.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -361.31234770027413,
                "y": 396.5308054962694,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint12.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -366.43729058787693,
                "y": 394.7186132296214,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint13.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -370.97,
                "y": 406.26,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint14.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -370.125,
                "y": 401.7810619407294,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint15.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -374.41,
                "y": 398.2,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CrocniceMokokoHint16.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -360.3125095187329,
                "y": 404.3121751703507,
                "popupText": "포식자 크록",
                "type": MarkerTypeEnum.Boss,
                "hintImage": "lutheran/CrocniceBossHint1.jpg",
                "title": "Boss"
            },
            {
                "x": -344.0003426743832,
                "y": 416.3743332444041,
                "popupText": "난파된 배",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/CrocniceVistaHint1.jpg",
                "title": "Vista"
            },
            {
                "x": -359.43743336886996,
                "y": 398.3432713036747,
                "popupText": "아름다운 해변가",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/CrocniceVistaHint2.jpg",
                "title": "Vista"
            },
            {
                "x": -348.3129854553762,
                "y": 427.40554905180943,
                "popupText": "도적이 떠난 야영지",
                "type": MarkerTypeEnum.Vista,
                "hintImage": "lutheran/CrocniceVistaHint3.jpg",
                "title": "Vista"
            },
            {
                "x": -351.0004473804447,
                "y": 420.2184080740534,
                "popupText": "바위동굴 조개",
                "type": MarkerTypeEnum.FoodIngredient,
                "hintText": "루테란성 요리사NPC - 하이드<br>최고급 해산물 스튜 식재료",
                "hintImage": "lutheran/CrocniceFoodIngredientHint1.jpg",
                "title": "Food Ingredient"
            },
            {
                "x": -353.65654508071884,
                "y": 419.6870554962694,
                "popupText": "바위동굴 새우",
                "type": MarkerTypeEnum.FoodIngredient,
                "hintText": "루테란성 요리사NPC - 하이드<br>최고급 해산물 스튜 식재료",
                "hintImage": "lutheran/CrocniceFoodIngredientHint2.jpg",
                "title": "Food Ingredient"
            },
            {
                "x": -350.3125475936643,
                "y": 407.3743503407014,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/CrocniceSecretHint1.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -353.1249428876028,
                "y": 404.84318582218805,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/CrocniceSecretHint2.jpg",
                "title": "Secret Passage"
            }
        ]
    });

    area.registerMap("Crying Storm", {
        kr: "크라잉스톰",
        type: MapTypeEnum.Continent,
        markers: [
            {
                "x": -360.37535219311604,
                "y": 458.8433054962694,
                "title": "To Crocnice Beach",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -324.94,
                    432.32
                ]
            },
            {
                "x": -351.9378331556503,
                "y": 468.8748119407294,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint1.jpg"
            },
            {
                "x": -372.2500475936643,
                "y": 474.71833968886403,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint2.jpg"
            },
            {
                "x": -367.28126903746573,
                "y": 478.6249829037027,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint3.jpg"
            },
            {
                "x": -366.90632614986293,
                "y": 477.656044844432,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint3.jpg"
            },
            {
                "x": -357.43765229972587,
                "y": 483.843698711108,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint4.jpg"
            },
            {
                "x": -346.9996858818154,
                "y": 474.43837191116387,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint5.jpg"
            },
            {
                "x": -347.4683502132196,
                "y": 473.71965610375855,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint5.jpg"
            },
            {
                "x": -337.68802353030765,
                "y": 478.7815235407573,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint6.jpg"
            },
            {
                "x": -336.6878902680475,
                "y": 487.9690919259466,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/CryingStormMokokoHint7.jpg"
            },
            {
                "x": -367.59362625647276,
                "y": 480.5622606518374,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/CryingStormSecretHint1.jpg"
            },
            {
                "x": -344.8441878617119,
                "y": 474.3125683851893,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/CryingStormSecretHint2.jpg"
            }
        ]
    });

    area.registerMap("Underground Chapel", {
        kr: "흑장미 교회당",
        type: MapTypeEnum.Dungeon,
        markers: [
            {
                "x": -233.18841379835516,
                "y": 198.94109022243953,
                "title": "To Black Rose Chapel",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -281.28,
                    198.82
                ]
            },
            {
                "x": -239.5632043862321,
                "y": 209.31537217795162,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -216.7505330490405,
                "y": 208.31588506687154,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -208.46924497410905,
                "y": 214.94062862241157,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -207.31288074931464,
                "y": 214.84692991130356,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -206.8753617118489,
                "y": 215.5342760446276,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -208.12534267438318,
                "y": 229.22086994086905,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -207.3751998933902,
                "y": 229.408523807545,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -215.93763326226014,
                "y": 236.50150447416513,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/ChapelMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -208.43790930551324,
                "y": 216.09682733351957,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/ChapelSecretHint1.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -208.81278556198598,
                "y": 228.68972251865304,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/ChapelSecretHint2.jpg",
                "title": "Secret Passage"
            },
            {
                "x": -227.68810919890345,
                "y": 225.31424382232777,
                "type": MarkerTypeEnum.Notice,
                "hintText": "Certain routes in this dungeon only open when certain passive residents are killed",
                "hintImage": "lutheran/ChapelNoticeHint1.jpg",
                "title": "Notice"
            }
        ]
    });

    area.registerMap("Lastra Forest (+King's Tomb)", {
        kr: "라스트라 숲 / 왕의무덤",
        type: MapTypeEnum.Dungeon,
        markers: [
            {
                "x": -313.49885775205604,
                "y": 166.6194949922594,
                "title": "To Solar Halo Hill",
                "type": MarkerTypeEnum.Zoning,
                "teleportTo": [
                    -340.16,
                    178.35
                ]
            },
            {
                "x": -300.5304789826378,
                "y": 164.3999072736902,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint1.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -308.74930513250075,
                "y": 171.7132962811514,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint2.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -308.06186224489795,
                "y": 172.99456337744874,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint3.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -305.12446695095946,
                "y": 174.0569437033674,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint4.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -303.24947646969235,
                "y": 174.2444437033674,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint5.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -295.0932550258909,
                "y": 174.74420435520477,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint6.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -283.65615481267133,
                "y": 180.18153339223147,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint7.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -300.87823636917454,
                "y": 133.1239058369708,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint8.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -290.78331556503196,
                "y": 142.71618555540033,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint9.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -295.7525986140725,
                "y": 147.4967004146151,
                "type": MarkerTypeEnum.Mokoko,
                "hintImage": "lutheran/LastraMokokoHint10.jpg",
                "title": "Mokoko Seed"
            },
            {
                "x": -303.43687176363085,
                "y": 173.3069949922594,
                "type": MarkerTypeEnum.SecretPassage,
                "hintImage": "lutheran/LastraSecretHint1.jpg",
                "title": "Secret Passage"
            }
        ]
    });

})();