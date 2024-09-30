// NotFound.jsx
import React from "react";
import GreenButton from "../components/common/GreenButton";
import Header from "../components/common/Header/Header";

import oops404 from "../assests/oops 404 img.jpg";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-content">
          <img src={oops404} alt="404"/>
          {/* <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you are looking for does not exist.</p> */}
          <GreenButton text="Home" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
