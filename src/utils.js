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
 * @return {number[]}
 */
GetBounds = function(center, size) {
    if(center[0] < 0) {
        size[0] *= -1;
    }

    if(center[1] < 0) {
        size[1] *= -1;
    }

    let tl = [center[0] - size[0], center[1] - size[1]];
    let br = [center[0] + size[0], center[1] + size[1]];
    for(let i = 0; i < 2; i++) {
        tl[i] = Math.round(tl[i] * 100) / 100;
        br[i] = Math.round(br[i] * 100) / 100;
    }

    return [tl, br];
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

RefreshMarkerLabel = function (marker, markerData) {
    labelIcon = L.divIcon({
        className: 'leaflet-label',
        html:  '<span class="marker-label-' + GetKeyByValue(MarkerTypeEnum, markerData.type) + '"">' + markerData.title + '</span>'
    });

    marker.setIcon(labelIcon);
};