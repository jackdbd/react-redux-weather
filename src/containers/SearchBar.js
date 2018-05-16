import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/actionCreators";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    // for convenience, when the user submit the form, we clean up the input
    this.setState({ term: "" });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast in your favourite cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span>
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

// we don't need to map any state to props in this component, but `connect` still requires a first argument
const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Promote the "dumb", redux-unaware, presentational component, to a "smart", redux-aware, container component
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
