import React from "react";

const Navbar = props => {
  const className = "nav-wrapper red accent-4";
  return (
    <nav>
      <div className={className}>
        <span className="brand-logo" style={{ fontFamily: "Lobster" }}>
          React Weather
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
