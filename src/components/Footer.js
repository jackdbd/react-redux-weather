import React from "react";

const Footer = props => {
  return (
    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
            <i className="material-icons left">wb_sunny</i>
            <i className="material-icons left">done</i>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Built with</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://materializecss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Materialize CSS
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeatherMap
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.mapbox.com/mapbox-gl-js/api/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapbox GL JS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
