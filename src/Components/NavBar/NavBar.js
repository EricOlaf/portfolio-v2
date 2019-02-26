import React from "react";
import "./NavBar.css";

import { Link } from "react-scroll";

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
        <div className="largeNav">
          <Link
            className="lgNavLink"
            onClick={() => {
              props.top();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Link>
          <Link
            className="lgNavLink"
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
            SKILLS
          </Link>
          <Link
            className="lgNavLink"
            to="experience"
            smooth={true}
            offset={-70}
            duration={500}
          >
            EXPERIENCE
          </Link>
          <Link
            className="lgNavLink"
            to="recentwork"
            smooth={true}
            offset={-70}
            duration={500}
          >
            RECENT WORK
          </Link>
          <Link
            className="lgNavLink"
            to="aboutme"
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT ME
          </Link>
        </div>
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
              props.navHandler();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Link>
          <Link
            to="skills"
            onClick={() => {
              props.navHandler();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SKILLS
          </Link>{" "}
          <Link
            to="experience"
            onClick={() => {
              props.navHandler();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            EXPERIENCE
          </Link>{" "}
          <Link
            to="recentwork"
            onClick={() => {
              props.navHandler();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            RECENT WORK
          </Link>
          <Link
            to="aboutme"
            onClick={() => {
              props.navHandler();
            }}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT ME
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
