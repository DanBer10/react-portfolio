import "./../scss/components/_media-text.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import codebackground from "../images/code-background.jpg";
import meGif from "../images/bernhardt-2.gif";

import { useState } from "react";

export default function Skills() {
  const [showFront, setShowFront] = useState(false);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showBack, setShowBack] = useState(false);

  function toggleFront(e) {
    e.preventDefault();
    setShowFront((prevState) => !prevState);
    setShowGeneral(false);
    setShowBack(false);
  }
  function toggleGeneral(e) {
    e.preventDefault();
    setShowGeneral((prevState) => !prevState);
    setShowFront(false);
    setShowBack(false);
  }
  function toggleBack(e) {
    e.preventDefault();
    setShowBack((prevState) => !prevState);
    setShowGeneral(false);
    setShowFront(false);
  }

  return (
    <>
      <div className="content-small">
        <div className="display-flex justify-center m-t-6">
          <div className="about-me-gif">
            <img src={meGif} alt="didnt find img" />
          </div>
        </div>
        <div className="about-text">
          <h3>
            Hello, I'm <span>Daniel Bernhardt.</span>
          </h3>
          <br />
          <p>
            A Front End Developer based in Stockholm, Sweden. I specialise in
            creating interactive experiences and functional interfaces using
            React, JavaScript and Design Systems. I strive to create elegant
            solutions that surprise and delight users, while keeping complex
            technical dependencies in mind for implementation and scalability.
          </p>
          <br />
          <div className="competencies">
            <p>
              Find below my <a href="#skills">skills</a> and{" "}
              <a href="#skills">IT competencies</a>{" "}
            </p>
          </div>
          <div className="about-arrow-down">
            <a href="#skills">
              {" "}
              <AiOutlineArrowDown />
            </a>
          </div>
        </div>
        <div id="skills"></div>
      </div>

      <section
        className="content-full background"
        style={{ background: codebackground }}
      >
        <div className="content-small skills-container">
          <div>
            <h3>
              <span
                onMouseEnter={toggleGeneral}
                onMouseLeave={() => setShowGeneral(false)}
              >
                General
              </span>
            </h3>

            {showGeneral ? (
              <div>
                <p>Swedish (ILR 5)</p>
                <p>English (ILR 4)</p>
                <p>Teamplayer</p>
                <p>Fast learner</p>
                <p>visual thinker</p>
                <p>agile methodology</p>
                <p>time management</p>
                <p>problem solver</p>
                <p>adaptable</p>
                <p>user experience</p>
              </div>
            ) : null}
          </div>
          <div>
            <h3>
              <span
                onMouseEnter={toggleFront}
                onMouseLeave={() => setShowFront(false)}
              >
                FrontEnd
              </span>
            </h3>
            {showFront ? (
              <div>
                <p>ReactJS</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>

                <p>SASS</p>
                <p>CMS</p>
                <p>JQuery</p>
                <p>OOP</p>
              </div>
            ) : null}
          </div>

          <div>
            <h3>
              <span
                onMouseEnter={toggleBack}
                onMouseLeave={() => setShowBack(false)}
              >
                BackEnd
              </span>
            </h3>
            {showBack ? (
              <div>
                <p>Java</p>
                <p>MySQL</p>
                <p>Docker</p>
                <p>Git</p>
                <p>OOP</p>
                <p>FireBase</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
