import "./../scss/components/_media-text.scss";
import { AiOutlineArrowDown } from "react-icons/ai"

export default function Skills() {



  return (
    <>
      <div className="content-small">
        <div className="about-text">
          <p>
          Hello I'm <big>Daniel.</big><br /> A Front End Developer based in Sweden. I specialise in creating interactive experiences and functional interfaces using React, JavaScript and Design Systems.
          I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.
          </p>
          <div className="about-arrow-down">
            <a href="#skills"> <AiOutlineArrowDown /></a>
        </div>

        </div>
  

        <h2 className="title" id="skills">skills</h2>
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
                <p>Swedish (ILR 5)</p>
                <p>English (ILR 4)</p>
                <p>team player</p>
                <p>fast learner</p>
                <p>visual thinker</p>
                <p>agile methodology</p>
                <p>time management</p>
                <p>problem solver</p>
                <p>adaptable</p>
                <p>user experience</p>
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
