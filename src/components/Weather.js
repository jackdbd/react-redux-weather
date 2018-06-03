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
    <div className="row" key={city.name}>
      <div
        className="grid-example col s12 m4"
        style={{ backgroundColor: "green" }}
      >
        <MapboxMap lon={city.coord.lon} lat={city.coord.lat} />
      </div>
      <div
        className="grid-example col s12 m4"
        style={{ backgroundColor: "red" }}
      >
        <Chart
          data={[temperatureObj]}
          title={"Temperature"}
          width={600}
          height={350}
          margin={{ left: 50, right: 0, bottom: 0, top: 0 }}
        />
      </div>
      <div
        className="grid-example col s12 m4"
        style={{ backgroundColor: "blue" }}
      >
        <Chart
          data={[pressureObj]}
          title={"Pressure"}
          width={300}
          height={150}
          margin={{ left: 50, right: 0, bottom: 0, top: 0 }}
        />
      </div>
    </div>
  );
};

export default Weather;
