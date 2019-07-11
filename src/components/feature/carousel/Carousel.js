import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import slide_one from "../../../resources/images/slide_one.jpg";
import slide_two from "../../../resources/images/slide_two.jpg";
import slide_three from "../../../resources/images/slide_three.jpg";
export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200
  };
  return (
    <div
      className="carousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
      {/* react-slick format looks like this:

      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div> */}
    </div>
  );
}
