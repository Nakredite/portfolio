import React from "react";
import About from "../components/About";
import Nakre from "../components/Nakre";
import CoverImage from "../components/images/NewImages/IMG_8271.JPG";
import "../styles.css";

function HomeE() {
  return (
    <div className="about-nakre-container">
      <div className="image-overlay cursor-pointer">
        <img src={CoverImage} alt="Nakredite" className="image" />
      </div>
      <div className="components">
        <div id="about" className="components">
          <About />
        </div>
        <div id="nakre" className="components">
          <Nakre />
        </div>
      </div>
    </div>
  );
}

export default HomeE;
