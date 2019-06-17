import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="insideRes">
        <div className="expTitle">CODING EXPERIENCE</div>
        <div className="expBoth">
          <a href="https://devmountain.com/">
            <img
              className="devMtnPic"
              src="https://pbs.twimg.com/profile_images/648907414587072512/RSKdI5dQ.png"
              alt=""
            />
          </a>
          <div className="expTextAll">
            <div className="expEachTitle">DEVMOUNTAIN STUDENT</div>
            <div className="expTextInfo">
              Completed 3-month intensive coursework to build foundation as a
              SERN stack developer with a base in Javascipt based programming.
            </div>
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
            <div className="expEachTitle">DEVMOUNTAIN VOLUNTEER</div>
            <div className="expTextInfo">
              Volunteer tutor at DevMountain. Time was spent discussing core
              concepts in JavaScript, React, Express, Node, and SQL.
            </div>
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
            <div className="expEachTitle">UI/UX INTERN AT MIZZEN+MAIN</div>
            <div className="expTextInfo">
              Quickly learned liquid, the templating language used on Shopify and developed best practices while writing code for the companies webiste.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
