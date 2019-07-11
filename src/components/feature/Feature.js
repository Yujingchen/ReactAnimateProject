import React from "react";
import "./Feature.scss";
import Carousel from "./carousel/Carousel";
function Feature() {
  return (
    <div className="container">
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  );
}
export default Feature;
