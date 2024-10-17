import React from "react";
import "./Categories.scss";
import beer from "../../assests/UI-task-images/beer.png";
import chef from "../../assests/UI-task-images/chef.png";
import guruji from "../../assests/UI-task-images/guruji.png";
import Fashionistas from "../../assests/UI-task-images/59.png";
import traveller from "../../assests/UI-task-images/53.png";

const Categories = () => {
  return (
    <div className="categoreis_container uni_padding">
      <div className="flex">
        <div className="og_text">
          <h1 className="gradient-text ">Categories </h1>
        </div>
        <a className="viewAllbtn">view all</a>
      </div>

      <div className="categories_ImgCards">
        <div className="categories_card">
          <div className="cat-img">
            <img src={chef} alt="beer" />
          </div>
          <div className="insideBG">
            <div>
            <p>The <br/> Foodies</p>
            </div>
          </div>
        </div>
        <div className="categories_card">
          <div className="cat-img">
            <img src={guruji} alt="beer" />
          </div>
          <div className="insideBG">
            <div><p>The <br/> Techies</p></div>
          </div>
        </div>
        <div className="categories_card">
          <div className="cat-img">
            <img src={beer} alt="beer" />
          </div>
          <div className="insideBG">
            <div>    <p>The <br/> Podcasters</p></div>
          </div>
        </div>
        <div className="categories_card">
          <div className="cat-img">
            <img src={Fashionistas} alt="beer" />
          </div>
          <div className="insideBG">
            <div><p>The <br/> Fashionistas</p></div>
          </div>
        </div>
        <div className="categories_card">
          <div className="cat-img">
            <img src={traveller} alt="beer" />
          </div>
          <div className="insideBG">
            <div><p>The <br/> Travellers</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
