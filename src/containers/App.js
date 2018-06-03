import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherList from "../components/WeatherList";
import "../globalStyle";

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const { cities, fetchWeather } = this.props;
    return (
      <div className="container">
        <Navbar />
        <SearchBar fetchWeather={fetchWeather} />
        <WeatherList cities={cities} />
      </div>
    );
  }
}

/*
  Take a portion of the entire application state (managed by redux) and make it
  available to this container component via props.
*/
function mapStateToProps(state) {
  const { cities } = state.weather;
  const props = {
    cities
  };
  return props;
}

/* 
  Bind action creators to props and pass them to all reducers via the dispatch
  function. Anything returned from this function will end up as props on the
  UserList container.
*/
function mapDispatchToProps(dispatch) {
  // object destructuring: {fetchUsers (prop): fetchUsers (action creator)}
  return bindActionCreators({ fetchWeather }, dispatch);
}

/*
  Promote the "dumb", redux-unaware, presentational component, to a "smart",
  redux-aware, container component.
*/
const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export { App, AppWithRedux };
