import React from 'react';
import styled from 'styled-components';
import { compose, pure, defaultProps, withHandlers, withState } from 'recompose';
import GeoJSON from './GeoJSON';
import data from '../_data/1544830408.json';
import { GenerateGeoJsonFromFeaturesArray } from '../utils/geojson';

export const INITIAL_VIEW_STATE = {
    latitude: 37.753786,
    longitude: -122.418615,
    zoom: 11,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
};

const MapillaryImageDetect = compose(
    pure,
    defaultProps({'geojson': data}),
    withState('viewport', 'setViewport', INITIAL_VIEW_STATE),
    withHandlers({
        onChangeViewPort: props => v => {
            let current = props.viewport;
            props.setViewport(v);
        }
    })
);

export default MapillaryImageDetect(GeoJSON);

