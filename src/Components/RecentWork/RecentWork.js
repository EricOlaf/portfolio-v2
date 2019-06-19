import React from "react";
import "./RecentWork.css";

function RecentWork() {
  return (
    <div className="recentwork">
      <h2 className="sitesTitle">MY APPS</h2>
      <div className="site">
        <div className="siteExp seone">
          <h3 className="siteName">RAW TRAILS</h3>
          <p className="infoOnMySite">
            A full-stack SERN website for adventure seekers to find and scheule
            the perfect guided outdoor vacation.
          </p>
          <p className="repo infoOnMySite">
            View GitHub Repo{" "}
            <a href="https://github.com/EricOlaf/raw-trails">here.</a>
          </p>
          <p className="repo infoOnMySite">
            Live example <a href="http://206.189.220.112:3005">here.</a>
          </p>
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
          <h3 className="siteName">APPY</h3>
          <p className="infoOnMySite">
            Social sedia app designed in React Native to uplift and encourage
            users
          </p>
          <p className="repo infoOnMySite">
            View GitHub Repo{" "}
            <a href="https://github.com/positivity-or-something/appy">here.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
