import React from "react";
import Weather from "./Weather";
// import styled from "styled-components";

// const Table = styled.table`
//   table-layout: fixed;
//   width: 100%;
// `;

const WeatherList = props => {
  return (
    <div>
      {props.data.map(d => {
        return <Weather city={d.city} list={d.list} key={d.city.id} />;
      })}
    </div>
  );
};

export default WeatherList;
