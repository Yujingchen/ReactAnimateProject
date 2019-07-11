import React from "react";
import { Element } from "react-scroll";
import Header from "./components/header/Header";
import Feature from "./components/feature/Feature";
import VenuInfo from "./components/venuInfo/VenuInfo";
import Highlight from "./components/highlight/Highlight";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

import "./styles/share.scss";
function App() {
  return (
    <div style={{ height: "2000px" }}>
      <Header />
      <Element name="feature">
        <Feature />
      </Element>
      <Element name="venuinfo">
        <VenuInfo />
      </Element>
      <Element name="highlight">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
