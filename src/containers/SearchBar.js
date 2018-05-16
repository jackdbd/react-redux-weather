import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/actionCreators";
import { Box, Button, Input, Columns, Column } from "bloomer";

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
      <Box>
        <form onSubmit={this.onFormSubmit}>
          <Columns isCentered>
            <Column isSize="3/4">
              <Input
                type="text"
                placeholder="Get a five day forecast in your favourite cities"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </Column>
            <Column isSize="1/4">
              <Button type="submit" isOutlined isColor="info">
                Submit
              </Button>
            </Column>
          </Columns>
        </form>
      </Box>
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
