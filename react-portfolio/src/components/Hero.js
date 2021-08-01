import React from "react";
import me from "../images/me.JPG";
// import programmer from "../images/programmer.svg";

export default function Hero() {
  return (
    <div className="hero-container content-standard">
      <div className="hero-info">
        <div>
          <h1>Hi, I'm Daniel</h1>
          <h3>FrontEnd developer</h3>
          <p>
          Software Engineering graduate from Nackademin, experienced
in Java programming and front-end web development in a
test-driven environment. I am a dedicated, eager, learner who
thrives in collaborative work environments and am
enthusiastic when it comes to facing new challenges that
require problem solving skills.

          </p>
        </div>
        <div>
          <img src={me} alt="hittade ej bild" className="programmer" />
        </div>
      </div>
    </div>
  );
}
