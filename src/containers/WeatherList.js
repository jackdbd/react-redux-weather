import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather(d) {
    const name = d.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
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
// export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
export default connect(mapStateToProps)(WeatherList);
