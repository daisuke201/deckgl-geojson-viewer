import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapillaryImageDetect from './layer/MapillaryImageDetect';
import {StaticMap} from 'react-map-gl';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MapillaryImageDetect />
      </div>
    );
  }
}

export default App;
