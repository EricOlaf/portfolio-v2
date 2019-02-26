import React from "react";
import "./NavBar.css";

import { Link, animateScroll as scroll } from "react-scroll";

function NavBar(props) {
  return (
    <div className="Nav">
      <div
        id="NavLeft"
        onClick={() => {
          props.on();
        }}
      >
        Need a Developer?
      </div>
      <div id="NavRight">
        <div
          className="NavButton"
          onClick={() => {
            props.navHandler();
          }}
        >
          MENU
        </div>
        <ul className={props.navLinks}>
          <Link
            onClick={() => {
              props.top();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Link>
          <Link to="skills" smooth={true} offset={-70} duration={500}>
            SKILLS
          </Link>
          <Link to="experience">EXPERIENCE</Link>{" "}
          <Link to="recentwork">RECENT WORK</Link>
          <Link to="aboutme">ABOUT ME</Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
