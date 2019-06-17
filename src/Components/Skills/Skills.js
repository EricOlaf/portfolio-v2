import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="techTitleAll">
        <div>TECH/SKILLS</div>
      </div>
      <div className="techAll">
        <div className="techSingle">
          <div className="">REACT</div>
          <img
            className="techImage"
            src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="centerMe">
            <div className="">REACT NATIVE</div>
          </div>
          <img
            className="techImage reactNative"
            src="https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">REDUX</div>
          <img
            className="techImage redux"
            src="http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">ES6+</div>
          <img
            className="techImage"
            src="https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">EXPRESS</div>
          <img
            className="techImage"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">GIT+GITHUB</div>
          <img
            className="techImage"
            src="http://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">HTML5</div>
          <img
            className="techImage"
            src="https://kathleenhalme.com/images/html-clip-png-5.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">POSTGRESQL</div>
          <img
            className="techImage"
            src="http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">CSS3</div>
          <img
            className="techImage"
            src="https://i.lensdump.com/i/8LCZ32.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">NODE</div>
          <img
            className="techImage"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">LIQUID</div>
          <img
            className="techImage"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="techSingle">
          <div className="">SCSS</div>
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
