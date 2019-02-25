import React from "react";
import "./RecentWork.css";

function RecentWork() {
  return (
    <div>
      <div className="sitesTitle">RECENT WORK</div>
      <div className="site">
        <div className="siteExp seone">
          <div className="siteName">RAW TRAILS</div>
          <div className="infoOnMySite">
            A website designed in React for adventure seekers to find and
            scheule the perfect guided outdoor trip.
          </div>
          <div className="repo infoOnMySite">
            View GitHub Repo{" "}
            <a href="https://github.com/EricOlaf/raw-trails">here.</a>
          </div>
          <div className="repo infoOnMySite">
            Live example <a href="http://206.189.220.112:3005">here.</a>
          </div>
        </div>

        <a href="https://github.com/EricOlaf/raw-trails">
          <img
            className="sitePic"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1548807359/Screen_Shot_2019-01-29_at_6.09.41_PM.png"
            alt=""
          />
        </a>
      </div>
      <div className="site two">
        <a href="https://github.com/positivity-or-something/appy">
          <img
            className="sitePic"
            src="https://garrettyaworski.com/img/threeviews.jpg"
            alt=""
          />
        </a>
        <div className="siteExp setwo">
          <div className="siteName">APPY</div>
          <div className="infoOnMySite">
            Social sedia app designed in React Native to uplift and encourage
            users
          </div>
          <div className="repo infoOnMySite">
            View GitHub Repo{" "}
            <a href="https://github.com/positivity-or-something/appy">here.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
