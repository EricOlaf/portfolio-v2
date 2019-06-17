import React from "react";
import "./Overlay.css";

function Overlay(props) {
  return (
    <div>
      <div className={props.contact}>
        <div className="overlayContainer">
          <div className="overlayContainerTwo">
            <div
              className="overlayExitContainer"
              onClick={() => {
                props.off();
              }}
            >
              X
            </div>
            <div className="overalyAllInfoContainer">
              <div className="olay email">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-outline-128.png"
                  alt=""
                  className="olayPic"
                />
                <div className="olayInfo"><a href="mailto:olavesoneric@gmail.com">olavesoneric@gmail.com</a></div>
              </div>
              <div className="olay phone">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/04-128.png"
                  alt=""
                  className="olayPic"
                />
                <div className="olayInfo">208-390-1971</div>
              </div>
            </div>
            <div className="overlayLinksContainer">
              <a href="https://www.linkedin.com/in/eric-olaveson-229b0a90">
                <img
                  className="overlayImg linkedInOlay"
                  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-128.png"
                  alt=""
                />
              </a>
              <a href="https://github.com/EricOlaf?tab=repositories">
                <img
                  className="overlayImg gitHubOlay"
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
