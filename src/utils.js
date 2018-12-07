/**
 * @return {number[]}
 */
const GetBoundsCenter = function(bounds) {
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
const GetBoundsSize = function(bounds) {
    if(bounds === undefined || bounds === null){
        return undefined;
    }

    let tl = bounds[0];
    let br = bounds[1];

    return [(br[0] - tl[0]), (br[1] - tl[1])];
};

/**
 * @return {number[][]}
 */
const GetBounds = function(center, size) {
    if(center[0] < 0) {
        size[0] *= -1;
    }

    if(center[1] < 0) {
        size[1] *= -1;
    }

    let tl = [center[0] - size[0], center[1] - size[1]];
    let br = [center[0] + size[0], center[1] + size[1]];
    return ToMapPrecisionBounds([tl, br]);
};

/**
 * @return {boolean}
 */
const BoundsContain = function(bounds, point) {
    if(bounds === undefined || bounds === null || point === undefined) {
        return false;
    }

    if(point[0] > bounds[0][0] || point[0] < bounds[1][0]) {
        return false;
    }

    if(point[1] < bounds[0][1] || point[1] > bounds[1][1]) {
        return false;
    }

    return true;
};

/**
 * @return {string}
 */
const GetKeyByValue = function(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

const RepositionRectangleMarker = function(marker, markerData){
    let halfSize = [markerData.size[0] / 2, markerData.size[1] / 2];
    let bounds = [[markerData.x - halfSize[0], markerData.y - halfSize[1]], [markerData.x + halfSize[0], markerData.y + halfSize[1]]];
    marker.setBounds(bounds);
};

const RefreshMarkerLabel = function (marker, markerData) {
    labelIcon = L.divIcon({
        className: 'leaflet-label',
        html:  '<span class="marker-label-' + GetKeyByValue(MarkerTypeEnum, markerData.type) + '"">' + _L(markerData.title) + '</span>'
    });

    marker.setIcon(labelIcon);
};

/**
 * @return {number}
 */
const ToMapPrecision = function(value) {
    return Math.round(value * 100) / 100;
};

/**
 * @return {number[][]}
 */
const ToMapPrecisionBounds = function (bounds) {
    return [
        [ToMapPrecision(bounds[0][0]), ToMapPrecision(bounds[0][1])],
        [ToMapPrecision(bounds[1][0]), ToMapPrecision(bounds[1][1])]
    ];
};

const InitFilterBtn = function(className, id, callback) {
    let buttons = $('.' + className + id);
    buttons.on('click', function () {
        $('.' + className + id).removeClass('filterBtnActive');
        $(this).addClass('filterBtnActive');

        let target = $(this).data('target');
        if(target === 'any'){
            target = undefined;
        }

        callback(id, target);
    });

    buttons.each(function(){
        let button = $(this);
        if(button.data('target') === 'any') {
            button.addClass('filterBtnActive');
        }
    });
};