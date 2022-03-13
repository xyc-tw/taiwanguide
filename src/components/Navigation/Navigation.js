import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      {/* <!-- use checked checkbox to style in css / unvisable --> */}
      <input type="checkbox" />
      {/* <!-- hamburger as a container for 3 lines--> */}
      <div id="hamburger">
        {/* <!-- hamburger lines / visable --> */}
        <div></div>
      </div>
      <div id="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#aboutus">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
