import React from "react";

import oops404 from "../assests/oops404img.jpg";
import Header from "../components/common/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="not-found-container">
        <div className="not-found-content">
          <img src={oops404} alt="404" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
