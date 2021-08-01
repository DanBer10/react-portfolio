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
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <div>
                <h3>BackEnd</h3>
                <p>Java</p>
                <p>MySQL</p>
                <p>FireBase</p>
                <p>Docker</p>
                <p>Git</p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
