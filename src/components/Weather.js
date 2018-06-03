import React from "react";
import Chart from "../components/Chart";
import MapboxMap from "../components/MapboxMap";

const Weather = props => {
  const { city, list } = props;
  const temperatureCoordinates = list.map((d, i) => {
    return { day: i, temp: d.main.temp };
  });
  const pressureCoordinates = list.map((d, i) => {
    return { day: i, temp: d.main.pressure };
  });
  const humidityCoordinates = list.map((d, i) => {
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
    <tr key={city.name}>
      <td>
        <MapboxMap lon={city.coord.lon} lat={city.coord.lat} />
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
};

export default Weather;
