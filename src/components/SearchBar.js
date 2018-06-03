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
        <form
          className="col s12"
          onSubmit={this.onFormSubmit}
          style={{ marginTop: "1rem" }}
        >
          <div className="row" style={{ marginBottom: "0rem" }}>
            <div className="input-field col s6 offset-s2">
              <input
                type="text"
                placeholder="e.g. San Francisco, Rome, Tokyo"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              {errorMessage ? (
                <label className="red-text" style={{ marginTop: "2.5rem" }}>
                  {errorMessage}
                </label>
              ) : null}
            </div>

            <div className="input-field col s3">
              <button type="submit" className="teal btn-flat white-text">
                Submit
                <i className="material-icons right">wb_sunny</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
