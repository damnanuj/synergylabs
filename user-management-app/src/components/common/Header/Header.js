import React from "react";
import "./Header.scss";
import {useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header_container uni_padding">
      <span className="material-icons" onClick={() => navigate("/")}>home</span>
      
      <div>
        <span className="material-icons">person</span>
        <h3>User Management</h3>
      </div>
    </header>
  );
};

export default Header;
