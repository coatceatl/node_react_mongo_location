import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import keys from '../../config/keys.js';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 32.2750268, lng: 34.8458601 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 32.2750268, lng: 34.8458601 }} />}
  </GoogleMap>
))

class SearchMap extends Component {
  render() {
    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL='https://maps.googleapis.com/maps/api/js?keys&v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100vh` }} />}
      />
    );
  }
}

export default SearchMap


