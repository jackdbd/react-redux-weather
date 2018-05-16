import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends Component {
  renderWeather(obj) {
    if (!obj) return <div>No data!</div>;
    const cityName = obj.city.name;
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
        <td>{cityName}</td>
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
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Presure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  const { weather } = state;
  return { weather };
}

// Promote the "dumb", redux-unaware, presentational component, to a "smart", redux-aware, container component
export default connect(mapStateToProps)(WeatherList);
