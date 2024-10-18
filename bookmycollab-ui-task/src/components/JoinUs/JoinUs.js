import React from "react";
import "./JoinUs.scss";
import { Link } from "react-router-dom";
import shop from "../../assests/UI-task-images/shop.png";
import mobile from "../../assests/UI-task-images/mobile.png";
import social_data from "../../assests/UI-task-images/social_data.png";

const JoinUs = () => {
  return (
    <div className="joinus_container uni_padding">
      <div className="asBrand">
        <div className="details">
          <p>Join As a Brand</p>
          <h1>
            Interdum et <br /> malesuada fames ac
          </h1>
          <Link to={"/join-as-brand"}>Join as a Brand &#8594;</Link>
        </div>
        <img src={shop} alt="shop" />
      </div>
      <div className="asCreator">
        <div className="details">
          <p>Join As a Creator</p>
          <h1>
            Interdum et <br /> malesuada fames ac
          </h1>
          <Link to={"/join-as-creator"}>Join As a Creator &#8594;</Link>
        </div>
        <img src={mobile} alt="shop" />
      </div>
      <div className="JoinUs_socials">
        <div></div>
        <div >
          <img src={social_data} alt="socialData"/>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
