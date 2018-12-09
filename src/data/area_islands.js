(function(){

    let area = LAM.createArea("Islands", {
        path: "maps/areas/Islands",
        zoomLevel: 7,
        bounds: [[0,0], [-515, 515]]
    });

    /*
        4_1
            죽음의 협곡 - Death Valley

        3_4
            회상의 섬 - Reminiscent Island
            오르비스 섬 - Orbis Island
            지혜의 섬 - Island of Wisdom
            잊혀진 자들의 도시 - Forgotten City
            에버그레이스의 둥지 - Everglade Nest
            두키 섬 - Duki Island

        3_3
            포모나 섬 - Pomona Island
            붐블링 아일랜드 - Boom Bling Island
            토토피아 - Totopia
            고요의 섬 - Silent Island
            메르시아 - Mercia
            잠자는 노래의 섬 - Sleeping Song Island
            자유의 섬 - Freedom Island
            검은이빨의 주둔지 - Black-Tooth Post
            거대버섯 섬 - Giant Mushroom Island

            [PVP] 해적마을 아틀라스 - Pirate Town Atlas

        3_2
            포르투나 - Fortuna
            에라스모의 섬 - Erasomoui Island
            두키 섬 - Duki Island
            외로운 섬 오페르 - Lonely Island Oper
            해바라기 섬 - Sunflower Island
            별빛 등대의 섬 - Starlight Lighthouse Island
            판다 푸푸 섬 - Panda Pupu Island
            포르페 - Forpe
            거북 섬 - Turtle Island
            노토스 섬 - Notos Island
            토토실버 섬 - Toto Silver Island
            에스텔라 - Estella
            로팡 섬 - Lopang Island
            해상 낙원 페이토 - Ocean Paradise Payto

            [PVP] 우거진 갈대의 섬 - Lush Reed Island

         3_1
            신월의 섬 - New Moon Island
            꿈꾸는 갈매기 섬 - Dreamy Seagull Island
            알트아이젠 - Alteisen
            황금물결 섬 - Golden Wave Island
            알라케르 - Alaquer
            비밀기지 X-301 - Secret Base X-301
            두키 섬 - Duki Island
            하얀파도 섬 - White Waves Island
            기회의 섬 - Opportunity Island
            도망자들의 마을 - Fugitive Village
            칼트헤르츠 - Kaltes Herz

            [PVP] 슬라임 아일랜드 - Slime Island

         3_0
            아르곤 - Argon
            부서진 빙하의 섬 - Broken Glacier Island
            얼음 미로의 섬 - Ice Maze Island
            혹한의 안식처 - Cold Home

         2_4
            세월의 섬 - Island of the Years

         2_3
            작은 행운의 섬 - Small Lucky Island
            비키니 아일랜드 - Bikini Island
            리베하임 - Ribeheim
            왜곡된 차원의 섬 - Distorted Dimension Island

         2_2
            두키 섬 - Duki Island
            클럽 아비뉴 - Club Avinue
            볼라르 섬 - Bolard Island
            짙은 안개 능선 - Thick Mist Ridge

            [PVP] 그릇된 욕망의 섬 - Misguided Island

         2_1
            스피다 섬 - Speeder Island
            메테오라 - Meteora

            [PVP] 환각의 섬 - Hallucination Island
            [PVP] 메데이아 - Medea

         2_0
            얼음과 불의 섬 - Island of Fire and Ice

         1_3
            격류의 섬 - Torrent Island
            황혼의 섬 - Twilight Island
            히프노스의 눈 - Hypnose Eye
            환영나비 섬 - Welcome Butterfly Island
            휴양지 그라비스 - Gravis Resort
            나루니 섬 - Naruni Island

            [PVP] 무법자의 섬 - Outlaw Island

         1_2
            아트로포스 - Atropose
            블루홀 섬 - Blue Hole Island
            희망의 섬 - Island of Hope
            태초의 섬 - Primeval Island
            니헬타로프의 상념 - Nichel Tarov's Thought
            기약의 섬 - Island of Rejoice
            메투스 제도 - Metus Islands
            발푸르기스 - Valpurgis

            [PVP] 고블린 섬 - Goblin Island
            [PVP] 안개의 섬 - Isle of Mist

         1_1
            갈망의 섬 - Isle of Longing
            고립된 영원의 섬 - Isle of Eternity
            몬테 섬 - Monte Island
            카마인의 주둔지 - Carmine's Post
            그림자의 섬 - Isle of Shadows
            고요한 안식의 섬 - Tranquil Island
            미지의 섬 - Unknown Island

         1_0
            지고의 섬 - Lucky Island

         0_2
            몽환의 섬 - Isle of Dreams
            하모니 섬 - Harmony Island
     */

    area.registerMap("Island of the Years", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Sabnak (사브나크)",
            "heartKR": "보스 사브나크 처치",
            "ilvl": 330
        },
        "bounds": [
            [
                -458.84,
                288.37
            ],
            [
                -478.84,
                308.37
            ]
        ]
    });

    area.registerMap("Reminiscent Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: 'Light, my True Friend' (나의 빛, 나의 진실한 벗)",
            "heartKR": "나의 빛, 나의 진실한 벗' 모험 퀘스트",
            "ilvl": 290
        },
        "bounds": [
            [
                -451.98,
                315.64
            ],
            [
                -471.98,
                335.64
            ]
        ]
    });

    area.registerMap("Misguided Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -205.18,
                286.86
            ],
            [
                -225.18,
                306.86
            ]
        ]
    });

    area.registerMap("Orbis Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Pumpkin (호박신)",
            "heartKR": "보스 호박신 처치",
            "ilvl": 435
        },
        "bounds": [
            [
                -430.4,
                327.94
            ],
            [
                -450.4,
                347.94
            ]
        ]
    });

    area.registerMap("Everglade Nest", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 525
        },
        "bounds": [
            [
                -445.96,
                375.84
            ],
            [
                -465.96,
                395.84
            ]
        ]
    });

    area.registerMap("Forgotten City", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Fishing-망각의 Open Treasure Box with Key",
            "heartKR": "낚시-망각의 열쇠로 보물상자 개봉",
            "ilvl": 250
        },
        "bounds": [
            [
                -425.86,
                368.92
            ],
            [
                -445.86,
                388.92
            ]
        ]
    });

    area.registerMap("Duki Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Kill: Dukiwang (두키왕)",
            "heartKR": "두키왕 처치",
            "ilvl": 300,
            "entry": "1:10 / 5:10 / 9:10 / 13:10 / 17:10 / 21:10",
            "entryTimes": [
                4200,
                18600,
                33000,
                47400,
                61800,
                76200
            ]
        },
        "bounds": [
            [
                -239.59,
                320.74
            ],
            [
                -259.59,
                340.74
            ]
        ]
    });

    area.registerMap("Island of Wisdom", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Exchange three hearts with Giant (need Song of Resonance)",
            "heartKR": "거인의 심장 3개로 교환 (공명의 노래 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -404.47,
                320.74
            ],
            [
                -424.47,
                340.74
            ]
        ]
    });

    area.registerMap("Pirate Town Atlas", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Exchange 15000 Pirate Coins with 암상인",
            "heartKR": "암상인-해적주화 15000개 교환",
            "ilvl": 400
        },
        "bounds": [
            [
                -337,
                396.47
            ],
            [
                -357,
                416.47
            ]
        ]
    });

    area.registerMap("Freedom Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Exchange 16800 Pirate Coins with Rosa (로사)",
            "heartKR": "로사-해적주화 16800개 교환",
            "ilvl": 250
        },
        "bounds": [
            [
                -350.33,
                394.37
            ],
            [
                -370.33,
                414.37
            ]
        ]
    });

    area.registerMap("Black-Tooth Post", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart:": "Become 'Trustworthy' with Black Tooth (검은이빨)",
            "heartKR": "검은이빨 호감도 '신뢰'",
            "ilvl": 360
        },
        "bounds": [
            [
                -377.68,
                389.25
            ],
            [
                -397.68,
                409.25
            ]
        ]
    });

    area.registerMap("Silent Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Linked Adventure Quest: 'Who is There?' (거기 누구요?)",
            "heartKR": "거기 누구요?' 모험 연계 퀘스트 진행",
            "ilvl": 300
        },
        "bounds": [
            [
                -376.08,
                339.46
            ],
            [
                -396.08,
                359.46
            ]
        ]
    });

    area.registerMap("Mercia", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 350
        },
        "bounds": [
            [
                -349.01,
                363.17
            ],
            [
                -369.01,
                383.17
            ]
        ]
    });

    area.registerMap("Totopia", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Linked Adventure Quest: 'Totopia's Missing Case' (토토피아 실종사건).<br>Follow up quest from 'Totpia's Teacher for a Day' (토토피아 일일교사).<br>Requires reputation with 클리어로",
            "heartKR": "토토피아 실종사건' 모험 연계 퀘스트 진행 (미운 우리 피그렛 퀘스트 이후 에포나 의뢰 '토토피아 일일교사' 클리어로 평판 획득 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -343.45,
                349.85
            ],
            [
                -363.45,
                369.85
            ]
        ]
    });

    area.registerMap("Sleeping Song Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Coop Quest: 'Magic of the Song' (마법은 노래를 타고)<br>Requires 4 Songs of Resonance and rewards with Minuet of the Forest.",
            "heartKR": "마법은 노래를 타고' 협동 퀘스트 (공명의 노래 4명 필요, 숲의 미뉴에트 획득)",
            "ilvl": 250,
            "entry": "0:40 / 3:40 / 6:40 / 9:40 / 12:40 / 15:40 / 18:40 / 21:40",
            "entryTimes": [
                2400,
                13200,
                24000,
                34800,
                45600,
                56400,
                67200,
                78000
            ]
        },
        "bounds": [
            [
                -328.13,
                366.89
            ],
            [
                -348.13,
                386.89
            ]
        ]
    });

    area.registerMap("Pomona Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure quest: '사나이의 순정' or  '사랑의 고민 상담'",
            "heartKR": "사나이의 순정' or '사랑의 고민 상담' 모험 연계 퀘스트 진행 ",
            "ilvl": 250
        },
        "bounds": [
            [
                -348.42,
                301.43
            ],
            [
                -368.42,
                321.43
            ]
        ]
    });

    area.registerMap("Boom Bling Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 345
        },
        "bounds": [
            [
                -308.5,
                312.54
            ],
            [
                -328.5,
                332.54
            ]
        ]
    });

    area.registerMap("Giant Mushroom Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Life skill: Logger, cut the Giant Mushroom",
            "heartKR": "거대 버섯 벌목 (벌목꾼 스킬 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -307.93,
                329.9
            ],
            [
                -327.93,
                349.9
            ]
        ]
    });

    area.registerMap("Bikini Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: '꿈이 가득한 섬으로'",
            "heartKR": "꿈이 가득한 섬으로' 모험 퀘스트",
            "ilvl": 250
        },
        "bounds": [
            [
                -326.79,
                288.98
            ],
            [
                -346.79,
                308.98
            ]
        ]
    });

    area.registerMap("Ribeheim", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Become 'Trustworthy' with Henry (헨리)",
            "heartKR": "헨리 호감도 '신뢰'",
            "ilvl": 250
        },
        "bounds": [
            [
                -308.49,
                280.79
            ],
            [
                -328.49,
                300.79
            ]
        ]
    });

    area.registerMap("Small Lucky Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Treasure Chest in the Field",
            "heartKR": "필드 보물상자",
            "ilvl": 250
        },
        "bounds": [
            [
                -342.1,
                265.89
            ],
            [
                -362.1,
                285.89
            ]
        ]
    });

    area.registerMap("Distorted Dimension Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: 'In the Distorted Dimension' (왜곡된 차원의 틈에서)<br>Requires Cube Vision",
            "heartKR": "왜곡된 차원의 틈에서' 모험 연계 퀘스트 진행 (큐브 비전 필요)",
            "ilvl": 0
        },
        "bounds": [
            [
                -307.96,
                207.8
            ],
            [
                -327.96,
                227.8
            ]
        ]
    });

    area.registerMap("Outlaw Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Treasure Chest in the Field",
            "heartKR": "필드 보물상자",
            "ilvl": 250
        },
        "bounds": [
            [
                -355.54,
                170.86
            ],
            [
                -375.54,
                190.86
            ]
        ]
    });

    area.registerMap("Torrent Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Aurion",
            "heartKR": "보스 아우리온 처치",
            "ilvl": 495
        },
        "bounds": [
            [
                -334.95,
                184.52
            ],
            [
                -354.95,
                204.52
            ]
        ]
    });

    area.registerMap("Naruni Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Naruni 101 collection",
            "heartKR": "나루니 101마리 수집",
            "ilvl": 330
        },
        "bounds": [
            [
                -307.64,
                170.87
            ],
            [
                -327.64,
                190.87
            ]
        ]
    });

    area.registerMap("Twilight Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -341.89,
                157.12
            ],
            [
                -361.89,
                177.12
            ]
        ]
    });

    area.registerMap("Gravis Resort", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: '궁극의 휴양'",
            "heartKR": "궁극의 휴양' 모험 퀘스트",
            "ilvl": 250
        },
        "bounds": [
            [
                -300.83,
                143.55
            ],
            [
                -320.83,
                163.55
            ]
        ]
    });

    area.registerMap("Hypnose Eye", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Become 'Trustworthy' with Calvados (칼바서스)",
            "heartKR": "칼바서스 호감도 '신뢰' ",
            "ilvl": 440
        },
        "bounds": [
            [
                -341.76,
                116.21
            ],
            [
                -361.76,
                136.21
            ]
        ]
    });

    area.registerMap("Welcome Butterfly Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -307.74,
                102.54
            ],
            [
                -327.74,
                122.54
            ]
        ]
    });

    area.registerMap("Isle of Dreams", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: Epona (에포나) Phase 2 reward",
            "heartKR": "퀘스트 (에포나 2단계 완료 보상)",
            "ilvl": 250
        },
        "bounds": [
            [
                -198.52,
                75.25
            ],
            [
                -218.52,
                95.25
            ]
        ]
    });

    area.registerMap("Harmony Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: Heavenly Harmony obtained (천상의 하모니)",
            "heartKR": "퀘스트 (천상의 하모니 획득)",
            "ilvl": 250,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -246.35,
                82.08
            ],
            [
                -266.35,
                102.08
            ]
        ]
    });

    area.registerMap("Primeval Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -280.33,
                102.59
            ],
            [
                -300.33,
                122.59
            ]
        ]
    });

    area.registerMap("Island of Hope", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: '희생된 이들을 기억하자'",
            "heartKR": "희생된 이들을 기억하자' 모험 퀘스트",
            "ilvl": 340
        },
        "bounds": [
            [
                -266.67,
                129.94
            ],
            [
                -286.67,
                149.94
            ]
        ]
    });

    area.registerMap("Goblin Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Goblin Pandora: Exchange for 3 goblin gold coins",
            "heartKR": "고블린 판도라 (고블린 금화 3개로 교환)",
            "ilvl": 400
        },
        "bounds": [
            [
                -259.82,
                150.37
            ],
            [
                -279.82,
                170.37
            ]
        ]
    });

    area.registerMap("Atropose", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: Throw a coin in the Fountain",
            "heartKR": "퀘스트-분수대에 동전 던지기",
            "ilvl": 250
        },
        "bounds": [
            [
                -287.02,
                157.3
            ],
            [
                -307.02,
                177.3
            ]
        ]
    });

    area.registerMap("Blue Hole Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -273.51,
                170.92
            ],
            [
                -293.51,
                190.92
            ]
        ]
    });

    area.registerMap("Valpurgis", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 445
        },
        "bounds": [
            [
                -218.87,
                95.72
            ],
            [
                -238.87,
                115.72
            ]
        ]
    });

    area.registerMap("Metus Islands", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250,
            "entry": "Unknown"
        },
        "bounds": [
            [
                -212.16,
                116.2
            ],
            [
                -232.16,
                136.2
            ]
        ]
    });

    area.registerMap("Island of Rejoice", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250,
            "entry": "Unknown"
        },
        "bounds": [
            [
                -232.57,
                129.9
            ],
            [
                -252.57,
                149.9
            ]
        ]
    });

    area.registerMap("Isle of Mist", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: obtain 6 notes in the field (쪽지)",
            "heartKR": "필드에서 쪽지 6개 획득 후 퀘스트 완료",
            "ilvl": 0
        },
        "bounds": [
            [
                -205.76,
                154.77
            ],
            [
                -225.76,
                174.77
            ]
        ]
    });

    area.registerMap("Nichel Tarov's Thought", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -232.63,
                150.37
            ],
            [
                -252.63,
                170.37
            ]
        ]
    });

    area.registerMap("Thick Mist Ridge", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -207.77,
                219.05
            ],
            [
                -227.77,
                239.05
            ]
        ]
    });

    area.registerMap("Bolard Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Coop Quest: Obtained from Bolar's Secret Box",
            "heartKR": "협동 퀘스트-볼라르의 비밀 상자에서 획득",
            "ilvl": 300,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -252.97,
                266.45
            ],
            [
                -272.97,
                286.45
            ]
        ]
    });

    area.registerMap("Club Avinue", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: 'A Cocktail Glass' (칵테일 한 잔의 여유) after finishing the daily Quest 'Unbreakable bits' (언브레이커블 비트)",
            "heartKR": "칵테일 한 잔의 여유' 일일 퀘스트 후 '언브레이커블 비트' 퀘스트 진행",
            "ilvl": 250
        },
        "bounds": [
            [
                -288.52,
                253.4
            ],
            [
                -308.52,
                273.4
            ]
        ]
    });

    area.registerMap("Fortuna", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Break the Jar",
            "heartKR": "항아리 파괴",
            "ilvl": 280
        },
        "bounds": [
            [
                -211.4,
                311.51
            ],
            [
                -231.4,
                331.51
            ]
        ]
    });

    area.registerMap("Lonely Island Oper", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: 'Heart of the Island' (섬의 마음)",
            "heartKR": "섬의 마음' 퀘스트",
            "ilvl": 250
        },
        "bounds": [
            [
                -205.23,
                327.42
            ],
            [
                -225.23,
                347.42
            ]
        ]
    });

    area.registerMap("Lush Reed Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Treasure Chest in the Field<br>Requires Minuet of the Forest",
            "heartKR": "필드 보물상자 (퀘스트도 가능, 숲의 미뉴에트 필요)",
            "ilvl": 250,
            "entry": "2:20 / 5:20 / 8:20 / 11:20 / 14:20 / 17:20 / 20:20 / 23:20",
            "entryTimes": [
                8400,
                19200,
                30000,
                40800,
                51600,
                62400,
                73200,
                84000
            ]
        },
        "bounds": [
            [
                -205.23,
                369.83
            ],
            [
                -225.23,
                389.83
            ]
        ]
    });

    area.registerMap("Sunflower Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Exchange for 10 Great works of Art (위대한 미술품)",
            "heartKR": "위대한 미술품 10개로 교환",
            "ilvl": 250
        },
        "bounds": [
            [
                -220.18,
                335.73
            ],
            [
                -240.18,
                355.73
            ]
        ]
    });

    area.registerMap("Starlight Lighthouse Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: 'The Lighthouse that leads the Soul' (영혼을 인도하는 등대)<br>Requires 50 Pirate coins.",
            "heartKR": "영혼을 인도하는 등대' 모험 연계 퀘스트 진행 (해적주화 50개 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -220.44,
                360.04
            ],
            [
                -240.44,
                380.04
            ]
        ]
    });

    area.registerMap("Panda Pupu Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Become \'Trustworthy\' with Pupu (푸푸)",
            "heartKR": "푸푸 호감도 '신뢰'",
            "ilvl": 250
        },
        "bounds": [
            [
                -219.03,
                398.41
            ],
            [
                -239.03,
                418.41
            ]
        ]
    });

    area.registerMap("Ocean Paradise Payto", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: 'Forgotten Ancient Stone' (잊혀진 고대의 마석)",
            "heartKR": "페이토 '잊혀진 고대의 마석' 모험 연계 퀘스트 진행",
            "ilvl": 250
        },
        "bounds": [
            [
                -253.74,
                335.67
            ],
            [
                -273.74,
                355.67
            ]
        ]
    });

    area.registerMap("Erasomoui Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Erasumo<br>Need 10 people playing 'Song of Resonance'",
            "heartKR": "보스 에라스모 처치 (공명의 노래 10명 필요)",
            "ilvl": 420
        },
        "bounds": [
            [
                -260.44,
                314.98
            ],
            [
                -280.44,
                334.98
            ]
        ]
    });

    area.registerMap("Lopang Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: Epona (에포나) Phase 6 Reward",
            "heartKR": "에포나 의뢰 6번 클리어 후 퀘스트",
            "ilvl": 250
        },
        "bounds": [
            [
                -282.7,
                327.44
            ],
            [
                -302.7,
                347.44
            ]
        ]
    });

    area.registerMap("Estella", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "필드 별똥별",
            "ilvl": 200
        },
        "bounds": [
            [
                -281.17,
                350.1
            ],
            [
                -301.17,
                370.1
            ]
        ]
    });

    area.registerMap("Toto Silver Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Become 'Trustworthy' with Elder Toto (토토장로)",
            "heartKR": "토토장로 호감도 '신뢰'",
            "ilvl": 250
        },
        "bounds": [
            [
                -293.17,
                355.42
            ],
            [
                -313.17,
                370
            ]
        ]
    });

    area.registerMap("Notos Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Linked Adventure Quest: 'Island with a Whale' (고래를 품은 섬)<br>Epona (에포나) 'Whale' (고래) Request.",
            "heartKR": "고래를 품은 섬' 연계 퀘스트 (에포나 '고래' 의뢰들 클리어)",
            "ilvl": 250
        },
        "bounds": [
            [
                -289.06,
                362.28
            ],
            [
                -309.06,
                382.28
            ]
        ]
    });

    area.registerMap("Forpe", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Batuak",
            "heartKR": "보스 바투아크 처치",
            "ilvl": 300
        },
        "bounds": [
            [
                -275.68,
                383.24
            ],
            [
                -295.68,
                403.24
            ]
        ]
    });

    area.registerMap("Turtle Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: 'Turtle and the Boy' (거북이와 소년)<br>You can purchase a Turtle Mount as reward.",
            "heartKR": "거북이와 소년' 모험 연계 퀘스트 진행 (보상으로 거북이 탈 것 구입 가능)",
            "ilvl": 250
        },
        "bounds": [
            [
                -245.38,
                360.57
            ],
            [
                -265.38,
                380.57
            ]
        ]
    });

    area.registerMap("Death Valley", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -142.48,
                411.9
            ],
            [
                -162.48,
                431.9
            ]
        ]
    });

    area.registerMap("Fugitive Village", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Quest: 250 Pirate coins required",
            "heartKR": "퀘스트 (해적주화 250개 필요)",
            "ilvl": 280
        },
        "bounds": [
            [
                -98.18,
                382.75
            ],
            [
                -118.18,
                402.75
            ]
        ]
    });

    area.registerMap("Opportunity Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Competition Quest: Goldfish Catching (황금 붕어를 잡아라)",
            "heartKR": "황금 붕어를 잡아라' 경쟁 퀘스트 보상 강태공의 주머니",
            "ilvl": 250,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -108.67,
                359.6
            ],
            [
                -128.67,
                379.6
            ]
        ]
    });

    area.registerMap("White Waves Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Become 'Trustworthy' with Emma (엠마)",
            "heartKR": "엠마 호감도 '신뢰'",
            "ilvl": 250
        },
        "bounds": [
            [
                -137.02,
                327.84
            ],
            [
                -157.02,
                347.84
            ]
        ]
    });

    area.registerMap("Kaltes Herz", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Daily: Free Slaves (5 times a day, rewards 50-300 coins per game)",
            "heartKR": "노예해방 수행 (하루 5번, 회당 해적주화 50-300개 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -103.53,
                298.42
            ],
            [
                -123.53,
                318.42
            ]
        ]
    });

    area.registerMap("Alaquer", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Coop Quest: Use Shiny Golden Feathers",
            "heartKR": "협동 퀘스트-빛나는 황금 깃털 사용",
            "ilvl": 280
        },
        "bounds": [
            [
                -151.24,
                308.09
            ],
            [
                -171.24,
                328.09
            ]
        ]
    });

    area.registerMap("New Moon Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Life Skill: Hunting, Exchange 20 결정 (requires level 5)",
            "heartKR": "수렵-결정 20개로 교환 (수렵 5레벨 필요)",
            "ilvl": 250,
            "entry": "3:20 / 7:20 / 11:20 / 15:20 / 19:20 / 23:20",
            "entryTimes": [
                12000,
                26400,
                40800,
                55200,
                69600,
                84000
            ]
        },
        "bounds": [
            [
                -179.28,
                309.85
            ],
            [
                -199.28,
                329.85
            ]
        ]
    });

    area.registerMap("Dreamy Seagull Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Linked Adventure Quest: 'To Seagull Island' (갈매기 섬으로)<br>Requires Minuet of the Forest",
            "heartKR": "갈매기 섬으로' 모험 연계 퀘스트 (숲의 미뉴에트 필요)",
            "ilvl": 250
        },
        "bounds": [
            [
                -184.38,
                323.17
            ],
            [
                -204.38,
                343.17
            ]
        ]
    });

    area.registerMap("Slime Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Kill Golden Bell Slime",
            "heartKR": "골든벨 슬라임 처치",
            "ilvl": 350
        },
        "bounds": [
            [
                -159.75,
                335.01
            ],
            [
                -179.75,
                355.01
            ]
        ]
    });

    area.registerMap("Secret Base X-301", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "kill Boss in dungeon 'Secret Base X-301'",
            "heartKR": "던전 비밀기지 X-301 보스 처치",
            "ilvl": 335
        },
        "bounds": [
            [
                -150.15,
                353.29
            ],
            [
                -170.15,
                373.29
            ]
        ]
    });

    area.registerMap("Golden Wave Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Shipwreck in the Field",
            "heartKR": "필드 난파물",
            "ilvl": 250
        },
        "bounds": [
            [
                -171.41,
                361
            ],
            [
                -191.41,
                381
            ]
        ]
    });

    area.registerMap("Alteisen", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Sol Grande",
            "heartKR": "보스 솔 그랑데 처치",
            "ilvl": 345
        },
        "bounds": [
            [
                -187.51,
                396.86
            ],
            [
                -207.51,
                416.86
            ]
        ]
    });

    area.registerMap("Speeder Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: ???",
            "heartKR": "보스 처치",
            "ilvl": 300,
            "entry": "1:50 / 7:50 / 13:50 / 19:50",
            "entryTimes": [
                6600,
                28200,
                49800,
                71400
            ]
        },
        "bounds": [
            [
                -183.7,
                218.46
            ],
            [
                -203.7,
                238.46
            ]
        ]
    });

    area.registerMap("Meteora", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -142.5,
                261.06
            ],
            [
                -162.5,
                281.06
            ]
        ]
    });

    area.registerMap("Hallucination Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Competition Quest: 'Red Lantern' (붉은 일렁임)<br>Rewards Hallucination Island Loot",
            "heartKR": "붉은 일렁임' 경쟁 퀘스트 보상 환각의 섬 전리품",
            "ilvl": 250,
            "entry": "0:20 / 2:20 / 4:20 / 6:20 / 8:20 / 10:20 / 12:20 / 14:20 / 14:20 / 16:20 / 18:20 / 20:20 / 22:20",
            "entryTimes": [
                1200,
                8400,
                15600,
                22800,
                30000,
                37200,
                44400,
                51600,
                51600,
                58800,
                66000,
                73200,
                80400
            ]
        },
        "bounds": [
            [
                -122.77,
                275.6
            ],
            [
                -142.77,
                295.6
            ]
        ]
    });

    area.registerMap("Medea", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Competition Quest: 'Medea's Contest' (메데이아 쟁탈전)<br>Rewards Medea's Gift",
            "heartKR": "메데이아 쟁탈전' 경쟁 퀘스트 보상 메데이아의 선물",
            "ilvl": 320,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -110,
                227.61
            ],
            [
                -130,
                247.61
            ]
        ]
    });

    area.registerMap("Monte Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Competition Quest: 'Find a dream Piece' (찾아라 꿈빛 조각!)<br>Rewards Monte Island Participation award.",
            "heartKR": "찾아라 꿈빛 조각!' 경쟁 퀘스트 보상 몬테섬 참가상",
            "ilvl": 330,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -171.13,
                170.83
            ],
            [
                -191.13,
                190.83
            ]
        ]
    });

    area.registerMap("Isle of Longing", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Kill Vice Captain (부선장 처치)<br>Obtain Setino's Secret Bag (세티노의 비밀가방)",
            "heartKR": "부선장 처치 - 세티노의 비밀가방",
            "ilvl": 365
        },
        "bounds": [
            [
                -191.55,
                136.85
            ],
            [
                -211.55,
                156.85
            ]
        ]
    });

    area.registerMap("Isle of Eternity", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -184.75,
                109.4
            ],
            [
                -204.75,
                129.4
            ]
        ]
    });

    area.registerMap("Carmine's Post", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 450
        },
        "bounds": [
            [
                -143.97,
                122.88
            ],
            [
                -163.97,
                142.88
            ]
        ]
    });

    area.registerMap("Isle of Shadows", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 420
        },
        "bounds": [
            [
                -136.97,
                184.49
            ],
            [
                -156.97,
                204.49
            ]
        ]
    });

    area.registerMap("Tranquil Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 400,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -123.43,
                157.03
            ],
            [
                -143.43,
                177.03
            ]
        ]
    });

    area.registerMap("Unknown Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 420,
            "entry": "Calendar Event"
        },
        "bounds": [
            [
                -116.48,
                143.38
            ],
            [
                -136.48,
                163.38
            ]
        ]
    });

    area.registerMap("Lucky Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -89.35,
                150.29
            ],
            [
                -109.35,
                170.29
            ]
        ]
    });

    area.registerMap("Island of Fire and Ice", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Boss kill: Briarose",
            "heartKR": "보스 브리아레오스 처치",
            "ilvl": 405
        },
        "bounds": [
            [
                -40.96,
                234
            ],
            [
                -60.96,
                254
            ]
        ]
    });

    area.registerMap("Ice Maze Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Adventure Quest: '따뜻한 온정의 횃불' (Humpback Whale Oil needed)",
            "heartKR": "모험 퀘스트 '따뜻한 온정의 횃불' (흑등고래의 기름 필요)",
            "ilvl": 280
        },
        "bounds": [
            [
                -41.41,
                321.13
            ],
            [
                -61.41,
                341.13
            ]
        ]
    });

    area.registerMap("Cold Home", {
        "type": MapTypeEnum.Island,
        "meta": {
            "ilvl": 250
        },
        "bounds": [
            [
                -36.51,
                355.03
            ],
            [
                -56.51,
                375.03
            ]
        ]
    });

    area.registerMap("Argon", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Kill Ice Stone Statue (얼음 석상)<br>Limited Number of People per day.",
            "heartKR": "얼음 석상 처치 (하루 인원 제한)",
            "ilvl": 250
        },
        "bounds": [
            [
                -77.47,
                327.62
            ],
            [
                -97.47,
                347.62
            ]
        ]
    });

    area.registerMap("Broken Glacier Island", {
        "type": MapTypeEnum.Island,
        "meta": {
            "heart": "Complete the Quest 'He is Watching' in Stern (그는 지켜보고 있다)<br>월드 퀘스트 후 페이토에서 선행 퀘스트 진행 (고요의 엘리지 획득)",
            "heartKR": "슈테른 '그는 지켜보고 있다' 월드 퀘스트 후 페이토에서 선행 퀘스트 진행 (고요의 엘리지 획득)",
            "ilvl": 270
        },
        "bounds": [
            [
                -70.64,
                362.98
            ],
            [
                -90.64,
                382.98
            ]
        ]
    });

})();