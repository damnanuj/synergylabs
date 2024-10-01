import React from "react";
import "./OgCreators.scss";
import {PurpleSmallBtn} from "../common/Button/PurpleButton";
import { creatorsData } from "../../Data/creatorsData";

const OgCreators = () => {
  return (
    <div className="Og_Creators_container uni_padding">
      <div className="flex">
        <div className="og_text">
          <h1 className="gradient-text">The OG Creators</h1>
          <p className="gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <a className="viewAllbtn">view all</a>
      </div>

      <div className="og_cards_container">
      {creatorsData.map((creator, index) => (
        <div key={index} className="og_card">
          <div className="og_img_container">
            <img src={creator.imageUrl} alt={`${creator.name}-creator`} />
          </div>
          <div className="social_name">
            <div>
              <h4>{creator.name}</h4>
              <p>{creator.username}</p>
            </div>
            <div className="followers">
              <h4>{creator.followers}</h4>
              <p>Followers</p>
            </div>
          </div>
          <div className="social_links">
            <div className="social_icons">
            <div><i class="fa-brands fa-instagram"></i></div>
              <div><i class="fa-brands fa-youtube"></i></div>
              <div><i class="fa-brands fa-facebook"></i></div>
            </div>
            <PurpleSmallBtn text={"Compare"} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OgCreators;
