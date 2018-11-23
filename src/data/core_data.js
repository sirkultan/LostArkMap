let ContentTypeEnum = Object.freeze({
    "AreaMap": "content_area_map",
    "TreasureMap": "content_treasure_map",
    "Guides": "content_guides",
    "Statistics": "content_statistics"
});

let MapTypeEnum = Object.freeze({
    "Continent": 1,
    "City": 2,
    "World": 3,
    "Dungeon": 4,
    "Island": 5
});

let MarkerTypeEnum = Object.freeze({
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
    "Zoning": "zooning.png",
    "GroupQuest": "groupquest.png",
    "OtherStory": "otherstory.png",
    "TreasureMap": "treasuremap.svg"
});

/**
 * @return {string}
 */
MarkerTypeDefaultTitle = function(markerType) {
    switch (markerType) {
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

        default: {
            console.warn("Unhandled Marker Type: " + markerType);
        }
    }
};

let Constants = Object.freeze({
    "TileSize": 512,
    "ErrorImagePath": 'maps/blank.png'
});