import React from "react";
import "./Footer.css";
import Pdf from "../../Pdf/Resume.pdf";
import github from "../../pics";

function Footer(props) {
  return (
    <div className="contAll">
      <img
        className="contPic"
        src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986435/RawTrails/i-88ZTPhL-X2.jpg"
        alt=""
      />
      <div className="contText">
        <div className="contLeft">
          <img
            className="picEric"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1549401716/_DSC5514.jpg"
            alt=""
          />
          <div className="contTitle">LET'S WORK TOGETHER</div>
          <div className="contAb">
            <p>
              I'm a Full Stack developer with a thirst for knowledge and
              oportunities to grow.
            </p>
            <a className="cv" href={Pdf} target="_blank">
              Download CV
            </a>
          </div>
          <button
            className="footButt"
            onClick={() => {
              props.on();
            }}
          >
            CONTACT ME
          </button>
        </div>
        <div className="contRight">
          <div className="contTitle">FIND ME ON:</div>
          <div className="socMed">
            <a href="https://www.linkedin.com/in/eric-olaveson-229b0a90">
              <img
                className="socIcon linkedIn"
                src="https://cdn1.iconfinder.com/data/icons/social-networks-3/512/linkedin-512.png"
                alt=""
              />
            </a>
            <a href="https://github.com/EricOlaf?tab=repositories">
              <img className="socIcon gitHub" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
