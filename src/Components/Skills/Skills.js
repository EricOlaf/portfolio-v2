import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="techTitleAll">
        <h2 className="h2-title gray-font">TECH/SKILLS</h2>
      </div>
      <div className="techAll">
        <div className="techSingle">
          <p className="">REACT</p>
          <img
            className="techImage"
            src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="centerMe">
            <p className="">REACT NATIVE</p>
          </div>
          <img
            className="techImage reactNative"
            src="https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">REDUX</p>
          <img
            className="techImage redux"
            src="http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">ES6+</p>
          <img
            className="techImage"
            src="https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">EXPRESS</p>
          <img
            className="techImage"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">GIT+GITHUB</p>
          <img
            className="techImage"
            src="http://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">HTML5</p>
          <img
            className="techImage"
            src="https://kathleenhalme.com/images/html-clip-png-5.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">POSTGRESQL</p>
          <img
            className="techImage"
            src="http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">CSS3</p>
          <img
            className="techImage"
            src="https://i.lensdump.com/i/8LCZ32.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">NODE</p>
          <img
            className="techImage"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">LIQUID</p>
          <img
            className="techImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1sYyULs6j9LDTpavC1-LYNBKBjT1RPLGk--rP5NibgaqEt48"
            alt=""
          />
        </div>
        <div className="techSingle">
          <p className="">SCSS</p>
          <img
            className="techImage"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
