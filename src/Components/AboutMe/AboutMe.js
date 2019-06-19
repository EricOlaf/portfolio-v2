import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme">
      <img
        className="aboutPicMe"
        src="https://res.cloudinary.com/rawtrails801/image/upload/v1549578604/UNADJUSTEDNONRAW_thumb_1720.jpg"
        alt=""
      />
      <div className="aboutPageTextAll">
        <h2 className="aboutPageTitle">ABOUT ME</h2>
        <div className="aboutPageText">
          <p>
            Urged by a friend who programs, I started coding for fun and found a
            new passion. Shortly after, I decided to make a career shift and
            enrolled at DevMountain. I love being engaged in the whole
            development process and seeing an aesthetic, functional outcome.
          </p>
          <br />
          <p>
            When I'm not coding I enjoy spending time with my wife and friends
            in the outdoors, playing sports, and eating good food.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
