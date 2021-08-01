import React from "react";
import "./../scss/components/_media-text.scss";

export default function Skills() {
  return (
    <>
      <div className="fullScreen-container"></div>
      <div className=" content-standard">
        <h2 className="title">skills</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-info">
              <div>
                <h3>FrontEnd</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>ReactJS</p>
                <p>SASS</p>
                <p>CMS</p>
                <p>JQuery</p>
                <p>FireBase</p>
                <p>OOP</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <div>
                <h3>General</h3>
                <p>Teamplayer</p>
                <p>Fast learner</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <div>
                <h3>BackEnd</h3>
                <p>Java</p>
                <p>MySQL</p>
                <p>Docker</p>
                <p>Git</p>
                <p>OOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
