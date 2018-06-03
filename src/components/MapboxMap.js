import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamFja2RiZCIsImEiOiJjajZudjI2YjEwOWpmMndtZXd0enFwMnMyIn0.FCzpJHEhYKSot_AJ7moPGw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class MapboxMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { lon, lat } = this.props;
    const options = {
      container: this.mapRef.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lon, lat],
      zoom: 10
    };
    this.map = new mapboxgl.Map(options);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.width, this.props.width)
    if (this.props.width !== prevProps.width) {
      this.map.resize();
    }
  }

  render() {
    const { width, height } = this.props;
    return (
      <div>
        <div
          ref={this.mapRef}
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          ;
        </div>
      </div>
    );
  }
}
export default MapboxMap;
