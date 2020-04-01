import React from "react";
import "./cb.css";

const CustomButton = ({ text, color, onClick }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: color, boxShadow: "1px 1px 5px " + color }}
    className="custom_button_box"
  >
    <div className="custom_button_box_inner">{text}</div>
  </div>
);

function buttonClick() {
  alert("Clicked");
}

CustomButton.defaultProps = {
  text: "Default Button",
  color: "#45b3e7",
  onClick: buttonClick
};
export default CustomButton;
