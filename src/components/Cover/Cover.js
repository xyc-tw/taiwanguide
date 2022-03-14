import React from "react";

import "./Cover.css";

import backgroundVideo from "./cover.mov";

const Cover = () => {
  return (
    <div>
      <div id="home">
        <video loop autoPlay muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="header">
        <h2>Hello Taiwan!</h2>
      </div>
    </div>
  );
};

export default Cover;
