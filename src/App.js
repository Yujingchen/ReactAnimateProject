import React from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Feature from "./components/feature/Feature";
import VenuInfo from "./components/venuInfo/VenuInfo";
import Highlight from "./components/highlight/Highlight";
import "./styles/share.scss";
function App() {
  return (
    <div style={{ height: "2000px" }}>
      <Header />
      <Feature />
      <VenuInfo />
      <Highlight />
    </div>
  );
}

export default App;
