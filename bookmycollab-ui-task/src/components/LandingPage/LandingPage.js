import React from "react";
import "./LandingPage.scss";
import bannerLady from "../../assests/UI-task-images/18.png";
import channel from "../../assests/UI-task-images/5.png";
import louis from "../../assests/UI-task-images/3.png";
import prada from "../../assests/UI-task-images/4.png";
import calvin from "../../assests/UI-task-images/2.png";
import denim from "../../assests/UI-task-images/1.png";
import wavinghand from "../../assests/waving-hand-sign.svg";
import Dropdown from "../common/SelcectOptionsMenu/SelectOptions";


const LandingPage = () => {
  return (
    <div className="landingPage_container uni_padding">
      {/* Landing Page left Section */}
      <div className="heroLeft">
        <div>
          {" "}
          <img className="waveHand" src={wavinghand} alt="hand" />
        </div>
        <h1 className="gradient-text">
          Simplyfying Influencer <br /> Marketing For You!
        </h1>
        <p>
          Explore creator across Youtube, Instagram & Facebook to create unique
          content for your brand
        </p>
        <Dropdown/>
        <div className="partnersListImg">
          <p>Trusted By</p>
          <img src={channel} alt="parters" />
          <img src={louis} alt="parters" />
          <img src={prada} alt="parters" />
          <img src={calvin} alt="parters" />
          <img src={denim} alt="parters" />
        </div>
      </div>

      {/* Landing Page right Section */}
      <div className="heroRight">
        <img src={bannerLady} alt="banner-lady" />
      </div>
    </div>
  );
};

export default LandingPage;
