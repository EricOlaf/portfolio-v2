import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import RecentWork from "../RecentWork/RecentWork";
import AboutMe from "../AboutMe/AboutMe";
import NavBar from "../NavBar/NavBar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      navLinks: "noShow"
    };
  }

  navHandler = () => {
    let { navLinks } = this.state;
    navLinks === "noShow"
      ? this.setState({ navLinks: "show" })
      : this.setState({ navLinks: "noShow" });
  };
  render() {
    let { navLinks } = this.state;
    return (
      <div>
        <NavBar navHandler={this.navHandler} navLinks={navLinks} />
        <Header />
        <div>
          <Skills />
          <Experience />
          <RecentWork />
          <AboutMe />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
