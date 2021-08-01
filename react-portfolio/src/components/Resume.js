import React from "react";
import resume from "../images/resume.pdf";

export default function WorkExp() {
  return (
    <div className="fullScreen-container">
      <div className="content-standard">
      <div className="pdf">
      <iframe src={resume}></iframe>
      <p><a href={resume}>Download Resume</a></p>
      </div>
      </div>
    </div>
  );
}
