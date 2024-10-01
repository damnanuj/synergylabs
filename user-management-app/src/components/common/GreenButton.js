import React from "react";
import { useNavigate } from "react-router-dom";

// custom button accepting 2 args as props default values are set
const GreenButton = ({ text = "Back", route = "/" }) => {
  const navigate = useNavigate();
  return (
    <button className="green_button" onClick={() => navigate(route)}>
      {text}
    </button>
  );
};

export default GreenButton;
