import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Cover from "./components/Cover/Cover";
import Features from "./components/Features/Features";
import Introduction from "./components/Introduction/Introduction";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

import "./App.css";

import backgroundVideo from "./cover.mov";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTopic: "culture",
    };
  }

  clickPhoto = (e) => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  changeTopic = (e) => {
    this.setState({ activeTopic: e.target.getAttribute("value") });
    const topics = document.querySelectorAll(".topic");
    topics.forEach((topic) => {
      topic.classList.remove("current");
    });
    e.target.classList.add("current");
  };

  navigate = () => {};

  render() {
    return (
      <div className="App">
        <Navigation />
        <Cover />
        <video loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Features
          activeTopic={this.state.activeTopic}
          changeTopic={this.changeTopic}
          clickPhoto={this.clickPhoto}
        />
        <Introduction />
        <Gallery />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
