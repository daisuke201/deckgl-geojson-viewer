import React from 'react';
import pure from 'recompose/pure';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import MapGL from 'react-map-gl';
import { colorToRGBArray } from '../utils/format-utils';
import { MAPBOX_TOKEN } from '../config/';

const GeoJSON = pure(props => {
    const layer = new GeoJsonLayer({
        id: 'geojson',
        data: props.geojson,
        pickable: true,
        stroked: false,
        filled: true,
        extruded: true,
        lineWidthScale: 20,
        lineWidthMinPixels: 2,
        getFillColor: [168, 20, 0, 255],
        getLineColor: d => colorToRGBArray(d.properties.color),
        getRadius: 100,
        getLineWidth: 10,
        getElevation: 30,
        fp64: true,
        onHover: ({object, x, y}) => {
        }
    });

    return (
            <MapGL
                {...props.viewport}
                width="100%"
                height="100%"
                dragRotate
                mapStyle="mapbox://styles/mapbox/light-v9"
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={props.onChangeViewPort}
            >
                <DeckGL {...props.viewport} layers={[layer]} />
            </MapGL>
        );
});

export default GeoJSON;
