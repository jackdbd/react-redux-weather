import React from "react";

const Header = props => {
  const text = props.text || "Some Title";
  const primaryColor = props.primaryColor || "orange";
  const navClass = `nav-extended ${primaryColor}`;
  const divClass = `nav-wrapper ${primaryColor} center-align`;
  return (
    <nav className={navClass}>
      <div className={divClass}>
        <h3 className="white-text">{text}</h3>
      </div>
    </nav>
  );
};

export default Header;
