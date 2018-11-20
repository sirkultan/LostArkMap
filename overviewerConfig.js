var overviewerConfig = {
    /*"worlds": [
        "sea"
    ], 
    "tilesets": [
        {
            "spawn": [
                0,
                80,
                204
            ],
            "isOverlay": false,
            "name": "Sea Map",
            "poititle": "Markers",
            "north_direction": 0,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 6,
            "base": "",
            "imgextension": "png",
            "defaultZoom": 1,
            "world": "sea",
            "maxZoom": 6,
            "path": "maps/sea",
            "showlocationmarker": true
        }
    ], */
    "CONST": {
        "mapDivId": "la_map",
        "UPPERLEFT": 0,
        "tileSize": 512,
        "UPPERRIGHT": 1, 
        "image": {
            "queryMarker": "icons/marker_location.png", 
            "spawnMarker": "icons/marker_home.png", 
            "spawnMarker2x": "icons/marker_home_2x.png", 
            "signMarker": "signpost_icon.png", 
            "queryMarker2x": "icons/marker_location_2x.png", 
            "compass": {
                "0": "images/compass_upper-left.png",
                "1": "images/compass_upper-right.png",
                "2": "images/compass_lower-right.png",
                "3": "images/compass_lower-left.png"
            }, 
            "defaultMarker": "signpost.png",
        }, 
        "LOWERRIGHT": 2, 
        "LOWERLEFT": 3
    }, 
    "map": {
        "debug": true, 
        "north_direction": "lower-left", 
        "controls": {
            "spawn": true, 
            "coordsBox": true, 
            "zoom": true, 
            "mapType": true, 
            "compass": true, 
            "overlays": true, 
            "pan": true
        }, 
        "center": [
            0,
            0,
            0
        ], 
        "cacheTag": "1542657278"
    }
};
