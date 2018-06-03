import React from "react";

const Navbar = props => {
  const className = "nav-wrapper red accent-4";
  return (
    <nav>
      <div className={className}>
        <span className="brand-logo" style={{ fontFamily: "Lobster" }}>
          React Weather
        </span>
        <ul className="right">
          <li>
            <a
              href="https://github.com/jackdbd/fullstack-express-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
