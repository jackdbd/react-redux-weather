import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    // fetch weather data here
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <form onChange={this.onFormSubmit}>
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

export default SearchBar;
