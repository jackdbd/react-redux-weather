import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { PropagateLoader } from "react-spinners";
import { fetchWeather } from "../actions/actionCreators";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherList from "../components/WeatherList";
import Footer from "../components/Footer";
import "../globalStyle";

// font-family: "Montserrat", sans-serif;
// font-family: "Lobster", cursive;
const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const primaryColor = "orange darken-2";
    const secondaryColor = "teal lighten-2";
    const { data, errorMessage, fetchWeather } = this.props;
    return (
      <Container>
        <Header text={"React Redux Weather"} primaryColor={primaryColor} />
        <Content>
          <SearchBar fetchWeather={fetchWeather} errorMessage={errorMessage} />
          {this.props.isLoading ? (
            <div className="row">
              <div className="col s12 offset-s6">
                <PropagateLoader
                  color={"#0336ff"}
                  loading={this.props.isLoading}
                />
              </div>
            </div>
          ) : null}
          <WeatherList data={data} />
        </Content>
        <Footer primaryColor={primaryColor} />
      </Container>
    );
  }
}

/*
  Take a portion of the entire application state (managed by redux) and make it
  available to this container component via props.
*/
function mapStateToProps(state) {
  const { data, errorMessage, isLoading } = state.weather;
  const props = {
    data,
    errorMessage,
    isLoading
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
const AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export { App, AppWithRedux };
