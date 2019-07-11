import React from "react";
import "./Feature.scss";
import Carousel from "./carousel/Carousel";
import CountDown from "./countDown/CountDown";
function Feature() {
  return (
    <div className="container">
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <CountDown />
    </div>
  );
}
export default Feature;
