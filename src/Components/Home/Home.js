import React, { Component } from "react";
import "./Home.css";
import { animateScroll as scroll } from "react-scroll";
// import ScrollableAnchor from "react-scrollable-anchor";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import RecentWork from "../RecentWork/RecentWork";
import AboutMe from "../AboutMe/AboutMe";
import NavBar from "../NavBar/NavBar";
import Overlay from "../Overlay/Overlay";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      navLinks: "noShow",
      contact: "noShowNav"
    };
  }

  navHandler = () => {
    let { navLinks } = this.state;
    navLinks === "noShowNav"
      ? this.setState({ navLinks: "showNav" })
      : this.setState({ navLinks: "noShowNav" });
  };
  contactHandlerOn = () => {
    this.setState({ contact: "show" });
  };

  contactHandlerOff = () => {
    this.setState({ contact: "noShow" });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    let { navLinks } = this.state;
    return (
      <div className="homeAll">
        <Overlay off={this.contactHandlerOff} contact={this.state.contact} />
        <NavBar
          on={this.contactHandlerOn}
          navHandler={this.navHandler}
          navLinks={navLinks}
          top={this.scrollToTop}
        />
        <Header on={this.contactHandlerOn} id={"top"} />
        <div className="containerOne">
          <div className="containerTwo">
            <Skills id="skills" />
            <Experience id="experience" />
            <RecentWork id="recentwork" />
            <AboutMe id="aboutme" />
          </div>
        </div>
        <Footer on={this.contactHandlerOn} />
      </div>
    );
  }
}

export default Home;
