import React, { Component } from "react";
import Chart from "../components/Chart";
import MapboxMap from "../components/MapboxMap";
import styled from "styled-components";

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

class WeatherList extends Component {
  renderWeather(obj) {
    if (!obj) return <div>No data!</div>;
    const cityName = obj.city.name;
    const { lon, lat } = obj.city.coord;

    const temperatureCoordinates = obj.list.map((d, i) => {
      return { day: i, temp: d.main.temp };
    });
    const pressureCoordinates = obj.list.map((d, i) => {
      return { day: i, temp: d.main.pressure };
    });
    const humidityCoordinates = obj.list.map((d, i) => {
      return { day: i, temp: d.main.humidity };
    });

    const temperatureObj = {
      color: "steelblue",
      coordinates: temperatureCoordinates
    };
    const pressureObj = {
      color: "orange",
      coordinates: pressureCoordinates
    };
    const humidityObj = {
      color: "#1fa713",
      coordinates: humidityCoordinates
    };

    return (
      <tr key={cityName}>
        <td>
          <MapboxMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart
            data={[temperatureObj]}
            title={"Temperature"}
            width={300}
            height={150}
          />
        </td>
        <td>
          <Chart
            data={[pressureObj]}
            title={"Pressure"}
            width={300}
            height={150}
          />
        </td>
        <td>
          <Chart
            data={[humidityObj]}
            title={"Humidity"}
            width={300}
            height={150}
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>{this.props.cities.map(this.renderWeather)}</tbody>
        </Table>
      </div>
    );
  }
}

export default WeatherList;
