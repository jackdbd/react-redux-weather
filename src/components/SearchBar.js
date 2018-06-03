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
    this.props.fetchWeather(this.state.term);
    // for convenience, when the user submit the form, we clean up the input
    this.setState({ term: "" });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { errorMessage } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit}>
          <div className="col s9">
            <input
              type="text"
              placeholder="San Francisco"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{ marginBottom: "0px" }}
            />
            {errorMessage ? (
              <label className="red-text">{errorMessage}</label>
            ) : null}
          </div>
          <div className="col s3">
            <button type="submit" className="teal btn-flat right white-text">
              Submit
              <i className="material-icons right">wb_sunny</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
