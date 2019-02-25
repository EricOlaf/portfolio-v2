import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutPage">
      <img
        className="aboutPicMe"
        src="https://res.cloudinary.com/rawtrails801/image/upload/v1549578604/UNADJUSTEDNONRAW_thumb_1720.jpg"
        alt=""
      />
      <div className="aboutPageTextAll">
        <div className="aboutPageTitle">ABOUT ME</div>
        <div className="aboutPageText">
          <p>
            Urged by a friend who programs I started coding for fun and found a
            new passion. I shortly thereafter decided on a career change from
            sales and quickly enrolled at DevMountain. I love being extremely
            engaged in the whole development process and seeing the asthetic,
            functional outcome.
          </p>
          <br />
          <p>
            When I'm not coding I like to spend time with my wife and friends in
            the outdoors, playing sports, and eating good food.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
