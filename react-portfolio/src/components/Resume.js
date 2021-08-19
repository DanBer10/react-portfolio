import React from "react";
import resume from "../images/resumee.pdf";

export default function WorkExp() {
  return (
    <div className="fullScreen-container">
      <div className="content-small">
        <div className="pdf">
          <p>
            <a href={resume}>Download Resume</a>
          </p>
          <div>
            <iframe src={resume}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
