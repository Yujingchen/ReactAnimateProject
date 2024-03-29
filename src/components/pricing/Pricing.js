import React, { Component } from "react";
import MyButton from "./../utils/MyButton";
import Zoom from "react-reveal/Zoom";
import "./Pricing.scss";
import "./../../styles/share.scss";
export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    ],
    linkto: ["/", "/", "/"],
    delay: [500, 0, 500]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <span>
                <MyButton
                  link={this.state.linkto[i]}
                  color="#fff"
                  text="Purchase"
                  bck="#ffa800"
                />
              </span>
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
