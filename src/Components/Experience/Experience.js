import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="insideRes">
        <h2 className="expTitle">CODING EXPERIENCE</h2>
        <div className="expBoth">
          <a href="https://devmountain.com/">
            <img
              className="devMtnPic"
              src="https://pbs.twimg.com/profile_images/648907414587072512/RSKdI5dQ.png"
              alt=""
            />
          </a>
          <div className="expTextAll">
            <h3 className="expEachTitle">DEVMOUNTAIN STUDENT</h3>
            <p className="expTextInfo">
              Completed 3-month intensive coursework to build foundation as a
              SERN stack developer with a base in Javascipt based programming.
            </p>
          </div>
        </div>
        <div className="expBoth">
          <a href="https://devmountain.com/">
            {" "}
            <img
              className="devMtnPic"
              src="https://pbs.twimg.com/profile_images/648907414587072512/RSKdI5dQ.png"
              alt=""
            />
          </a>
          <div className="expTextAll">
            <h3 className="expEachTitle">DEVMOUNTAIN VOLUNTEER</h3>
            <p className="expTextInfo">
              Volunteer tutor at DevMountain. Time was spent discussing core
              concepts in JavaScript, React, Express, Node, and SQL.
            </p>
          </div>
        </div>
        <div className="expBoth">
          <a href="https://www.mizzenandmain.com/">
            {" "}
            <img
              className="devMtnPic"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </a>
          <div className="expTextAll">
            <h3 className="expEachTitle">UI/UX INTERN AT MIZZEN+MAIN</h3>
            <p className="expTextInfo">
              Quickly learned liquid the templating language used in Shopify and developed best practices while writing code for Mizzen+Main's webiste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
