import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import MyButton from "../../utils/MyButton";
export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.percentage();
            }}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
            <div className="discount_description">
              <h3>Purchase ticket before 2 December</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                href="/"
              />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
