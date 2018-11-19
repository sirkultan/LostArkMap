var overviewerConfig = {
    "worlds": [
        "world",
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
            "last_rendertime": 1454034070, 
            "name": "Overviewer Render (lighting)", 
            "poititle": "Markers", 
            "north_direction": 0, 
            "minZoom": 0, 
            "bgcolor": "#1a1a1a", 
            "zoomLevels": 6, 
            "base": "", 
            "imgextension": "png", 
            "defaultZoom": 1, 
            "world": "world", 
            "maxZoom": 6, 
            "path": "maps/world-lighting",
            "showlocationmarker": true
        },
        {
            "spawn": [
                0,
                80,
                204
            ],
            "isOverlay": false,
            "last_rendertime": 1454034070,
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
    ], 
    "CONST": {
        "mapDivId": "mcmap", 
        "UPPERLEFT": 0, 
        "tileSize": 384, 
        "UPPERRIGHT": 1, 
        "image": {
            "queryMarker": "icons/marker_location.png", 
            "spawnMarker": "icons/marker_home.png", 
            "spawnMarker2x": "icons/marker_home_2x.png", 
            "signMarker": "signpost_icon.png", 
            "queryMarker2x": "icons/marker_location_2x.png", 
            "compass": {
                "0": "compass_upper-left.png", 
                "1": "compass_upper-right.png", 
                "2": "compass_lower-right.png", 
                "3": "compass_lower-left.png"
            }, 
            "defaultMarker": "signpost.png", 
            "bedMarker": "bed.png"
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
            -314, 
            67, 
            94
        ], 
        "cacheTag": "1542657278"
    }
};
