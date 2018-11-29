let Constants = Object.freeze({
    "EditMode": false,
    "TileSize": 512,
    "ErrorImagePath": 'maps/areas/blank.png',
    'AchievementMarkerColor': '#ff9900'
});

let ContentTypeEnum = Object.freeze({
    "AreaMap": "content_area_map",
    "TreasureMap": "content_treasure_map",
    "Guides": "content_guides",
    "Search": "content_search",
    "Statistics": "content_statistics"
});

let MapTypeEnum = Object.freeze({
    "Continent": 1,
    "City": 2,
    "World": 3,
    "Dungeon": 4,
    "Island": 5,
    "Internal": 999
});

let MarkerStyleEnum = Object.freeze({
    "Point": 1,
    "Rectangle": 2,
    "Circle": 3,
    "Label": 4,
});

let MarkerTypeEnum = Object.freeze({
    "Internal": undefined,
    "Boss": "boss.png",
    "CookingIngredient": "cookingingredient.png",
    "FavorNPC": "favornpc.png",
    "FoodIngredient": "foodingredient.png",
    "HiddenStory": "hiddenstory.png",
    "Mokoko": "mokoko.png",
    "PlayInstrument": "playinstrument.png",
    "SecretPassage": "secretpassage.png",
    "TreasureBox": "treasurebox.png",
    "Vista": "vista.png",
    "WorldBoss": "world_boss.png",
    "Zoning": "zoning.png",
    "ZoningWorld": "zoningworld.png",
    "ZoningIsland": "zoningisland.png",
    "ZoningIslandFlux": "zoningislandflux.png",
    "ZoningPVP": "zoningpvp.png",
    "GroupQuest": "groupquest.png",
    "OtherStory": "otherstory.png",
    "TreasureMap": "treasuremap.svg",
    "HiddenQuest": "hiddenquest.png",
    "Notice": "notice.png",
    "TargetMark": "targetmark.png",
    "IslandHeart": "islandheart.png",
    "SeaAreaAquatic": "seaareaaquatic.png",
    "SeaAreaDeath": "seaareadeath.png",
    "SeaAreaIce": "seaareaice.png",
    "SeaAreaSandstorm": "seaareasandstorm.png",
    "SeaAreaSiren": "seaareasiren.png",
    "SeaAreaStorm": "seaareastorm.png",
    "Note": "note.png"
});

let SearchResultTypeEnum = Object.freeze({
    "Area": "area",
    "Marker": "marker",
    "Guide": "guide"
});

/**
 * @return {string}
 */
MarkerDefaultColor = function(markerType) {
    switch (markerType) {
        case MarkerTypeEnum.Internal: {
            return Constants.AchievementMarkerColor;
        }

        case MarkerTypeEnum.SeaAreaAquatic: {
            return "#5ceb86";
        }

        case MarkerTypeEnum.SeaAreaDeath: {
            return "#4d647d";
        }

        case MarkerTypeEnum.SeaAreaIce: {
            return "#d9d9d9";
        }

        case MarkerTypeEnum.SeaAreaSandstorm: {
            return "#d0b349";
        }

        case MarkerTypeEnum.SeaAreaSiren: {
            return "#dca2da";
        }

        case MarkerTypeEnum.SeaAreaStorm: {
            return "#0075ff";
        }
    }
};

/**
 * @return {string}
 */
MarkerTypeDefaultTitle = function(markerType) {
    switch (markerType) {
        case MarkerTypeEnum.Internal: {
            return "_";
        }

        case MarkerTypeEnum.Mokoko: {
            return "Mokoko Seed";
        }

        case MarkerTypeEnum.Vista: {
            return "Vista";
        }

        case MarkerTypeEnum.SecretPassage: {
            return "Secret Passage";
        }

        case MarkerTypeEnum.Boss: {
            return "Boss";
        }

        case MarkerTypeEnum.HiddenStory: {
            return "Hidden Story";
        }

        case MarkerTypeEnum.WorldBoss: {
            return "World Boss";
        }

        case MarkerTypeEnum.FavorNPC: {
            return "Favor NPC";
        }

        case MarkerTypeEnum.CookingIngredient: {
            return "Cooking Ingredient";
        }

        case MarkerTypeEnum.FoodIngredient: {
            return "Food Ingredient";
        }

        case MarkerTypeEnum.Zoning: {
            return "Zone change";
        }

        case MarkerTypeEnum.ZoningIsland: {
            return "Area change (Island)";
        }

        case MarkerTypeEnum.ZoningIslandFlux: {
            return "Area change (Island in Flux)";
        }

        case MarkerTypeEnum.ZoningPVP: {
            return "Area change (PVP)";
        }

        case MarkerTypeEnum.ZoningWorld: {
            return "Area change (World)";
        }

        case MarkerTypeEnum.TreasureBox: {
            return "Treasure Box";
        }

        case MarkerTypeEnum.PlayInstrument: {
            return "Play Instrument";
        }

        case MarkerTypeEnum.GroupQuest: {
            return "Group Quest";
        }

        case MarkerTypeEnum.OtherStory: {
            return "Other Story";
        }

        case MarkerTypeEnum.TreasureMap: {
            return "Treasure Map";
        }

        case MarkerTypeEnum.HiddenQuest: {
            return "Hidden Quest";
        }

        case MarkerTypeEnum.Notice: {
            return "Notice";
        }

        case MarkerTypeEnum.IslandHeart: {
            return "Island Heart";
        }

        case MarkerTypeEnum.SeaAreaAquatic: {
            return "Aquatic Area (수초 해역)";
        }

        case MarkerTypeEnum.SeaAreaDeath: {
            return "Death Area (망자 해역)";
        }

        case MarkerTypeEnum.SeaAreaIce: {
            return "Ice Area (한파 해역)";
        }

        case MarkerTypeEnum.SeaAreaSandstorm: {
            return "Sandstorm Area (모래폭풍 해역)";
        }

        case MarkerTypeEnum.SeaAreaSiren: {
            return "Siren Area (세이렌 해역)";
        }

        case MarkerTypeEnum.SeaAreaStorm: {
            return "Stormy Area (폭풍우 해역)";
        }

        case MarkerTypeEnum.Note: {
            return "Note";
        }

        default: {
            console.warn("Unhandled Marker Type: " + markerType);
        }
    }
};

let EditorModeEnum = Object.freeze({
    "Add": 0,
    "Delete": 1,
    "Modify": 2,
    "Move": 3
});