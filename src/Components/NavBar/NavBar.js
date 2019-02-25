import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="Nav">
      <div id="NavLeft">Need a Developer?</div>
      <div id="NavRight">
        <button
          className="NavButton"
          onClick={() => {
            props.navHandler();
          }}
        >
          MENU
        </button>
        <select className={props.navLinks}>
          <option id="navskills">SKILLS</option>
          <option id="navExperience">EXPERIENCE</option>
          <option id="navRecentWork">RECENT WORK</option>
          <option id="navAboutMe">ABOUT ME</option>
        </select>
      </div>
    </div>
  );
}

export default NavBar;
