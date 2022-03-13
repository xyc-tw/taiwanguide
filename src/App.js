import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Cover from "./components/Cover/Cover";
import Features from "./components/Features/Features";
import Introduction from "./components/Introduction/Introduction";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

import Form from "./components/Form/Form";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTopic: "culture",
      route: "homepage",
      inMainPage: true,
    };
  }

  // change page when topic is choosed
  changeTopic = (e) => {
    this.setState({ activeTopic: e.target.getAttribute("value") });
    const topics = document.querySelectorAll(".topic");
    topics.forEach((topic) => {
      topic.classList.remove("current");
    });
    e.target.classList.add("current");
  };

  // change between mainpage and form
  changePage = (route) => {
    if (route === "homepage") {
      this.setState({ inMainPage: true });
    } else if (route === "form") {
      this.setState({ inMainPage: false });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === "homepage" ? (
          <div>
            <Navigation />
            <Cover />
            <Features
              activeTopic={this.state.activeTopic}
              changeTopic={this.changeTopic}
            />
            <Introduction changePage={this.changePage} />
            <Gallery />
            <AboutUs />
            <Footer />
          </div>
        ) : (
          <Form changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default App;
