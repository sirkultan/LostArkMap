/**
 * @return {number[]}
 */
GetBoundsCenter = function(bounds) {
    if(bounds === undefined){
        return undefined;
    }

    let tl = bounds[0];
    let br = bounds[1];

    return [tl[0] + ((br[0] - tl[0]) / 2), tl[1] + ((br[1] - tl[1]) / 2)];
};

/**
 * @return {number[]}
 */
GetBoundsSize = function(bounds) {
    if(bounds === undefined){
        return undefined;
    }

    let tl = bounds[0];
    let br = bounds[1];

    return [(br[0] - tl[0]), (br[1] - tl[1])];
};

/**
 * @return {string}
 */
GetKeyByValue = function(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

RepositionRectangleMarker = function(marker, markerData){
    let halfSize = [markerData.size[0] / 2, markerData.size[1] / 2];
    let bounds = [[markerData.x - halfSize[0], markerData.y - halfSize[1]], [markerData.x + halfSize[0], markerData.y + halfSize[1]]];
    marker.setBounds(bounds);
};