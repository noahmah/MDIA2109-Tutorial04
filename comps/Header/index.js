// Use the same component to change:
// font size
// text color of the header
// onMouseOver

import React from "react";
import "./header.css";

const Header = ({ text, fontSize, color, onMouseOver }) => (
  <div className="Header" style={{ color }}>
    <h1 style={{ fontSize }}>{text}</h1>
  </div>
);

function MouseOver() {
  alert("Mouse is over");
}

Header.defaultProps = {
  fontSize: 12,
  color: "#000000",
  onMouseOver: MouseOver,
  text: "Header",
};

export default Header;
