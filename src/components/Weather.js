import React, { Component } from "react";
import ResizeAware from "react-resize-aware";
import Chart from "../components/Chart";
import MapboxMap from "../components/MapboxMap";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapWidth: 200,
      mapHeight: 100 / 2,
      chartWidth: 200,
      chartHeight: 100
    };
  }

  handleResize = ({ width, height }) => {
    // console.log("Weather: handleResize", width, height);
    // TODO: how to know how many children a React component has?
    /*
      https://materializecss.com/grid.html
    */
    const numChildren = 2;
    const size = width < 600 ? width : width / numChildren;
    this.setState({
      mapWidth: size,
      mapHeight: size / 2,
      chartWidth: size,
      chartHeight: size / numChildren
    });
  };

  render() {
    const { city, list } = this.props;
    const temperatureCoordinates = list.map((d, i) => {
      return { day: i, temp: d.main.temp };
    });
    const pressureCoordinates = list.map((d, i) => {
      return { day: i, temp: d.main.pressure };
    });
    // const humidityCoordinates = list.map((d, i) => {
    //   return { day: i, temp: d.main.humidity };
    // });

    const temperatureObj = {
      color: "steelblue",
      coordinates: temperatureCoordinates
    };
    const pressureObj = {
      color: "orange",
      coordinates: pressureCoordinates
    };
    // const humidityObj = {
    //   color: "#1fa713",
    //   coordinates: humidityCoordinates
    // };

    return (
      <ResizeAware
        style={{ position: "relative", backgroundColor: "red" }}
        onlyEvent
        onResize={this.handleResize}
      >
        <div className="row">
          <div className="col s12">
            <h3>{`${city.name}, ${city.country}`}</h3>
          </div>
          <div className="col s12 m6">
            <MapboxMap
              width={this.state.mapWidth}
              height={this.state.mapHeight}
              lon={city.coord.lon}
              lat={city.coord.lat}
            />
          </div>

          <div className="col s12 m6">
            <Chart
              data={[temperatureObj]}
              title={"Temperature"}
              width={this.state.chartWidth}
              height={this.state.chartHeight}
              margin={{ left: 40, right: 40, bottom: 0, top: 0 }}
            />

            <Chart
              data={[pressureObj]}
              title={"Pressure"}
              width={this.state.chartWidth}
              height={this.state.chartHeight}
              margin={{ left: 40, right: 40, bottom: 0, top: 0 }}
            />
          </div>
        </div>
      </ResizeAware>
    );
  }
}

export default Weather;
