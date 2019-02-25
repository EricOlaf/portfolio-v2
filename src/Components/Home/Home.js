import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import RecentWork from "../RecentWork/RecentWork";
import AboutMe from "../AboutMe/AboutMe";
import NavBar from "../NavBar/NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
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
