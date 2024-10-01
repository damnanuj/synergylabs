import React from "react";
import "./PurpleButton.scss";

export const PurpleSmallBtn = ({ text = "Compare" }) => {
  return <button className="purple_small_btn">{text}</button>;
};

const PurpleButton = ({ text = "Login" }) => {
  return <button className="purpleBtn">{text}</button>;
};

export default PurpleButton;
