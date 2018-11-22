(function(){

    let area = LAM.createArea("Yudia", {
        kr: "유디아",
        path: "maps/areas/Yudia",
        zoomLevel: 4
    });

    area.registerMap("Saland Hills", {
        kr: "살란드 구릉지",
        img: "SalandHills.png",
        type: MapTypeEnum.Continent,
        markers: [
            { x: -468.69, y: 416.88, title: "To Borderlands (Artemis)", type: MarkerTypeEnum.Zoning,
                teleportTo: [-16.94, 255.63],
                teleportArea: 'Artemis'}
        ]
    });

    area.registerMap("Ozhorn Hills", {
        kr: "오즈혼 구릉지",
        img: "OzhornHills.png",
        type: MapTypeEnum.Continent,
        markers: [
        ]
    });

    area.registerMap("Sapira Cave", {
        kr: "사피라 동굴",
        img: "SapiraCave.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

    area.registerMap("Morai Ruins", {
        kr: "모라이 유적",
        img: "MoraiRuins.png",
        type: MapTypeEnum.Dungeon,
        markers: [
        ]
    });

})();