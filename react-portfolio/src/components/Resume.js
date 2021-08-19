import React from "react";
import resume from "../images/resumee.pdf";

export default function WorkExp() {
  return (
    <div className="fullScreen-container">
      <div className="content-small">
        <div className="pdf">
          <div>
            <iframe src={resume}></iframe>
            <p>
              <a href={resume}>Download Resume</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
