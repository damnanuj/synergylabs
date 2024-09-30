import React from "react";
import { useNavigate } from "react-router-dom";

const GreenButton = ({ text = "Back", route = "/" }) => {
  const navigate = useNavigate();
  return (
    <button className="green_button" onClick={() => navigate(route)}>
      {text}
    </button>
  );
};

export default GreenButton;
