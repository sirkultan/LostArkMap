(function() {

    let area = LAM.createArea("Sea", {
        kr: "항해",
        path: "maps/sea"
    });

    area.registerMap("Main", {
        kr: "",
        type: MapTypeEnum.World
    });


}());