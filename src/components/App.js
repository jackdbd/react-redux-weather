import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";
import { Container } from "bloomer";
import "../globalStyle";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <WeatherList />
      </Container>
    );
  }
}

export default App;
