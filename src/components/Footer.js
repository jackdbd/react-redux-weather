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
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Built with</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://reactjs.org/"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://redux.js.org/"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://materializecss.com/"
                >
                  Materialize CSS
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.openweathermap.org/api"
                >
                  OpenWeatherMap
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.mapbox.com/mapbox-gl-js/api/"
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
