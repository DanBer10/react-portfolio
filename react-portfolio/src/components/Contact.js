import React from "react";
import social from "../images/social.svg";

export default function Contact() {
  return (
    <>
      <div className="fullScreen-container">
        <div className="content-standard">
          <div className="card-container">
            <div className="card big">
              <div className="card-info">
                <div>
                  <h2>Daniel Bernhardt</h2>
                  <div>
                    <h3>Phone:</h3>
                    <span>+46705189424</span>
                  </div>
                  <div>
                    <h3>Email:</h3>
                    <span>Danielbernhardt1996@outlook.com</span>
                  </div>
                  <div>
                    <h3>Linkedin:</h3>
                    <span>/in/danielbernhardtt/</span>
                  </div>
                  <div>
                    <h3>Phone:</h3>
                    <span>+46705189424</span>
                  </div>
                </div>
              </div>
            </div>
            <img src={social} height="500" width="500" alt="didnt find img" />
          </div>
        </div>
      </div>
    </>
  );
}
