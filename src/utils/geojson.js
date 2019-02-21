import { hint } from '@mapbox/geojsonhint';

/**
 * isGeoJSON returns the correct GeoJson format
 * @param {object} geojson - geojson GeoJSON Object
 * @returns {bool} - if input data is GeoJSON data returns true.
 */
function isGeoJSON(geojson) {
    const errors = hint(geojson); // lint
    // this data is not geojson
    if (errors.length > 0) {
        return false;
    }
    return true;
}

/**
 * Add the FeatureCollection to be inputted geometry data
 * @param {object} srcJson - Geometry data corresponded from GeoJSON
 * @returns {Object} - GeoJSON data with FeatureCollection
 */
export function GenerateGeoJsonFromFeaturesArray(srcJson) {
    if (isGeoJSON(srcJson)) {
        return srcJson;
    }

    let dstJson = {
        type: 'FeatureCollection',
        features: null
    };

    dstJson.features = srcJson;
    return dstJson;
}
