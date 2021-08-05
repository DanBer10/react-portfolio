import React from "react";

export default function Education() {
  return (
    <div className="fullScreen-container">
      <div className="content-small">
        <h2 className="title">System engineer Nackademin</h2>
        <div className="card-grid">
          <div className="card one">
            <div className="card-info">
              <div className="color-light">
                <h3>Internship</h3>
              </div>
            </div>
          </div>
          <div className="card two">
            <div className="card-info">
              <div>
                <h3>Sphinxly</h3>
                <p>
                  <h5>
                    FrontEnd development
                    <br />
                    <br />
                  </h5>
                  Developed responsive user-friendly websites for companies.
                  Interacted with EasyWeb CMS.
                </p>
              </div>
            </div>
          </div>
          <div className="card three">
            <div className="card-info">
              <div>
                <h3>NetEnt</h3>
                <p>
                  <h5>
                    BackEnd development
                    <br />
                    <br />
                  </h5>
                  Worked with Data lake. Used Java and Golang. Interacted with
                  hydra database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
