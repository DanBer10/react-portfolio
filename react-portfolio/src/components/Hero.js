import React from "react";
import me from "../images/me.JPG";
// import programmer from "../images/programmer.svg";

export default function Hero() {
  return (
    <div className="hero-container content-standard">
      <div className="hero-info">
        <div>
          <h1>Daniel Bernhardt</h1>
          <h3>FrontEnd developer</h3>
        </div>
        <div>
          <img src={me} alt="hittade ej bild" className="programmer" />
        </div>
      </div>
    </div>
  );
}
