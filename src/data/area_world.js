(function() {

    let area = LAM.createArea("World", {
        kr: "항해",
        path: "maps/areas/World",
        zoomLevel: 5
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World,
        markers: [
            { x: -221.62, y: 336.58, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap1.jpg"},

            { x: -188.24, y: 455.74, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap2.jpg"},

            { x: -409.87, y: 394.89, type: MarkerTypeEnum.TreasureMap,
                hintImage: "world/TreasureMap3.jpg"},
        ]
    });


}());