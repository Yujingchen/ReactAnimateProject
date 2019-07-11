import React, { Component } from "react";
import Description from "./description/Description";
import Discount from "./discount/Discount";
import "./Highlight.scss";

export default class Highlight extends Component {
  render() {
    return (
      <div className="highlight_wrapper">
        <Description />
        <Discount />
      </div>
    );
  }
}
