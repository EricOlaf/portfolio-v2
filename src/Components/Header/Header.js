import React from "react";
import "./Header.css";

import { Link } from "react-scroll";

function Header(props) {
  return (
    <header>
      <div className="header">
      <img
        id="backgroudImg"
        src="https://res.cloudinary.com/rawtrails801/image/upload/v1549427681/RawTrails/IMG_1963.JPG.jpg"
        alt=""
      />
 
      <div id="text">
      <div className="headerAnimationLeft">
      <h1 className="title">ERIC OLAVESON</h1>
        <p id="headerP">I design, build and maintain websites</p>
        <button
          onClick={() => {
            props.on();
          }}
        >
          CONTACT ME
        </button>
      </div>
        <div className="center">
        <Link
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
          <img  className="arrow" src="https://res.cloudinary.com/rawtrails801/image/upload/v1561488593/icons8-double-down-96.png" alt=""/>
          </Link>
        </div>
        <h3>This works!!!</h3>
      </div>
    </div>
    </header>
  );
}

export default Header;
