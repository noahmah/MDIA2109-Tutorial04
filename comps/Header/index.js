// Use the same component to change:
// font size
// text color of the header
// onMouseOver

import React from "react";
import "./header.css";

const Header = ({ fontSize, color, onMouseOver }) => (
  <div className="Header" style={{ color }}>
    <h1 style={{ fontSize }}>Header</h1>
    <p onMouseOver={onMouseOver}>Mouse Over Me</p>
  </div>
);

function MouseOver() {
  alert("Mouse is over");
}

Header.defaultProps = {
  fontSize: 12,
  color: "#000000",
  onMouseOver: MouseOver
};

export default Header;
