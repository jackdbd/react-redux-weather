import React from "react";
import Weather from "./Weather";

const WeatherList = props => {
  return (
    <div>
      {/*
        README! Since in the reducer I insert a new city at the first position
        of the `data` array, I cannot use the index as the `key`. Also, since
        a user could potentially search the same city twice (or more), the `key`
        I am using here might not be unique (it's a warning, not an error).
      */}
      {props.data.map(d => {
        return <Weather city={d.city} list={d.list} key={d.city.id} />;
      })}
    </div>
  );
};

export default WeatherList;
