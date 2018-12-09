const Constants = Object.freeze({
    "EditMode": false,
    "TileSize": 512,
    "ErrorImagePath": 'maps/areas/blank.png',
    'AchievementMarkerColor': '#ff9900',
    'FPS': 30,
    'SettingsVersion': 8,
    'SettingsKey': 'LAM_SETTINGS',
    'MaxSearchResults': 50,
    'SeoulMomentTZName': 'Asia/Seoul',
    'SeoulMomentTZ': "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6",
    'LocalizedTextClass': 'loc-txt'
});

const ContentTypeEnum = Object.freeze({
    "AreaMap": "content_area_map",
    "TreasureMap": "content_treasure_map",
    "Guides": "content_guides",
    "Cards": "content_cards",
    "Crew": "content_crew",
    "Search": "content_search",
    "Events": "content_events",
    "FAQ": "content_faq",
    "Statistics": "content_statistics",
    "Changelog": "content_changelog"
});

const MapTypeEnum = Object.freeze({
    "Continent": 1,
    "City": 2,
    "World": 3,
    "Dungeon": 4,
    "Island": 5,
    "Internal": 999
});

const MarkerStyleEnum = Object.freeze({
    "Point": 1,
    "Rectangle": 2,
    "Circle": 3,
    "Label": 4,
});

const MarkerTypeEnum = Object.freeze({
    "Internal": undefined,
    "Boss": "boss.png",
    "CookingIngredient": "cookingingredient.png",
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
    "ZoningIslandPVP": "zoningislandpvp.png",
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
    "Note": "note.png",
    "NativeVillage": "nativevillage.png",
    "Mail": "mail.png",
    "Waypoint": "waypoint.png",
    "NPCRepair": "npc_repair.png",
    "NPCStorage": "npc_storage.png",
    "NPCFavor": "npc_favor.png",
});

const SearchResultTypeEnum = Object.freeze({
    "Area": "area",
    "Marker": "marker",
    "Guide": "guide",
    "FAQ": "faq",
    "Card": "card",
    "Crew": "crew"
});

const EditorModeEnum = Object.freeze({
    "Add": 0,
    "Delete": 1,
    "Modify": 2,
    "Move": 3
});

const RarityEnum = Object.freeze({
    Normal: 0,
    Uncommon: 1,
    Rare: 2,
    Epic: 3,
    Legendary: 4
});

const TreasureMapAreaFilter = Object.freeze({
    Continent: 'continent',
    World: 'world'
});

const TreasureMapLandFilterEnum = Object.freeze({
    Sparse: 'sparse',
    Normal: 'medium',
    Abundant: 'abundant'
});

const EventsEventEnum = Object.freeze({
    Internal: 'events_internal.png',
    IslandEntry: 'events_island_entry.png'
});

const MapClickMode = Object.freeze({
    Default: 1,
    ZoomTo: 2,
    CopyPosition: 3
});

const LocalizationLanguage = Object.freeze({
    English: 'en',
    Korean: 'kr'
});

/**
 * @return {string}
 */
RarityImage = function(rarity){
    switch (rarity) {
        case RarityEnum.Normal: return 'common';
        case RarityEnum.Uncommon: return 'uncommon';
        case RarityEnum.Rare: return 'rare';
        case RarityEnum.Epic: return 'epic';
        case RarityEnum.Legendary: return 'legendary';

        default: {
            console.error("Invalid Rarity: " + rarity);
        }
    }
};

/**
 * @return {string}
 */
RarityColor = function(rarity) {
    switch (rarity) {
        case RarityEnum.Normal: {
            return '#fdfdfd';
        }

        case RarityEnum.Uncommon: {
            return '#87ee01';
        }

        case RarityEnum.Rare: {
            return '#00aaf1';
        }

        case RarityEnum.Epic: {
            return '#cb42f8';
        }

        case RarityEnum.Legendary: {
            return '#f88a00';
        }
    }
};

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

        case MarkerTypeEnum.NPCFavor: {
            return "Favor NPC";
        }

        case MarkerTypeEnum.NPCRepair: {
            return "Repair";
        }

        case MarkerTypeEnum.NPCStorage: {
            return "Storage";
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

        case MarkerTypeEnum.ZoningIslandPVP: {
            return "Area change (PVP Island)";
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

        case MarkerTypeEnum.NativeVillage: {
            return "Native Village";
        }

        case MarkerTypeEnum.Waypoint: {
            return "Waypoint";
        }

        case MarkerTypeEnum.Mail: {
            return "Mail";
        }

        default: {
            console.warn("Unhandled Marker Type: " + markerType);
        }
    }
};