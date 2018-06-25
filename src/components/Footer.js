import React from "react";

const Footer = props => {
  const primaryColor = props.primaryColor || "orange";
  const textClass = "grey-text text-lighten-3";
  const className = `page-footer ${primaryColor}`;
  return (
    <footer className={className}>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="white-text">About</h5>
            <span className="grey-text text-lighten-4">
              Code:{" "}
              <a
                className={textClass}
                href="https://github.com/jackdbd/react-redux-weather"
                target="_blank"
                rel="noopener noreferrer"
              >
                repo on GitHub
              </a>
            </span>

            <br />
            <span className="grey-text text-lighten-4">
              Me:{" "}
              <a
                className={textClass}
                href="https://twitter.com/jackdbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.linkedin.com/in/giacomodebidda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.giacomodebidda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </span>
          </div>
          <div className="col s12 m6">
            <h5 className="white-text">Built with</h5>
            <ul>
              <li>
                <a
                  className={textClass}
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className={textClass}
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
