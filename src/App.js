import React from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <div style={{ height: "2000px", background: "blue" }}>
      <Header />
      <Feature />
    </div>
  );
}

export default App;
