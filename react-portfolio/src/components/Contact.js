import React from "react";
import social from "../images/social.svg";
import { AiOutlinePhone, AiTwotoneMail, AiFillLinkedin } from 'react-icons/ai'

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
                    <h3>< AiOutlinePhone /></h3>
                    <a href="tel: +46705189424">+46705189424</a>
                  </div>
                  <div>
                    <h3><AiTwotoneMail /></h3>
                    <a href="mailto:Danielbernhardt1996@outlook.com">Danielbernhardt1996@outlook.com</a>
                  </div>
                  <div>
                    <h3><AiFillLinkedin /></h3>
                    <a href="https://se.linkedin.com/in/danielbernhardtt" target="_blank" rel="noreferrer">danielbernhardtt</a>
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
