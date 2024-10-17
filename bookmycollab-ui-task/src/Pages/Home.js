import React from "react";
import Header from "../components/common/Header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import AlertMsg from "../Alert";
import OgCreators from "../components/OgCreators/OgCreators";
import Categories from "../components/Categories/Categories";
import Designer from "../components/Designer/Designer";
import JoinUs from "../components/JoinUs/JoinUs";

const Home = () => {
  return (
    <div className="homePageHolder">
      <AlertMsg />
      <Header />
      <LandingPage />
      <OgCreators
        heading={"The OG Creators"}
        contentText={"Lorem ipsum dolor sit amet, consectetur adipiscing"}
      />
      <Categories/>
      <OgCreators
        heading={"In The Spotlight"}
        contentText={"Lorem ipsum dolor sit amet, consectetur adipiscing"}
      />
      <Designer/>
      <OgCreators
        heading={"On The Rise"}
        contentText={"Lorem ipsum dolor sit amet, consectetur adipiscing"}
      />
      <JoinUs/>
      <OgCreators
        heading={"UGC"}
        contentText={"Lorem ipsum dolor sit amet, consectetur adipiscing"}
      />
    </div>
  );
};

export default Home;
