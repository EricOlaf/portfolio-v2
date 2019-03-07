import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <img
        id="backgroudImg"
        src="https://res.cloudinary.com/rawtrails801/image/upload/v1549427681/RawTrails/IMG_1963.JPG.jpg"
        alt=""
      />
      <div id="text">
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
    </div>
  );
}

export default Header;
