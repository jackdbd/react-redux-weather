import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamFja2RiZCIsImEiOiJjajZudjI2YjEwOWpmMndtZXd0enFwMnMyIn0.FCzpJHEhYKSot_AJ7moPGw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class MapboxMap extends Component {
  componentDidMount() {
    const { lon, lat } = this.props;
    new mapboxgl.Map({
      container: this.refs.map,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lon, lat],
      zoom: 10
    });
  }

  render() {
    return <span ref="map" />;
  }
}

export default MapboxMap;
