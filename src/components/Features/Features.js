import React from "react";
import Display from "./Display/Display";

import "./Features.css";

const Features = ({ activeTopic, changeTopic, clickPhoto }) => {
  return (
    <div id="features" className="section">
      <h1>Features</h1>
      <div className="topics">
        <p
          className="topic current"
          value="culture"
          onClick={(e) => changeTopic(e)}
        >
          Culture
        </p>
        <p className="topic" value="nature" onClick={(e) => changeTopic(e)}>
          Nature & Outdoor
        </p>
        <p className="topic" value="life" onClick={(e) => changeTopic(e)}>
          Life
        </p>
        <p className="topic" value="events" onClick={(e) => changeTopic(e)}>
          Events
        </p>
      </div>
      <Display activeTopic={activeTopic} clickPhoto={clickPhoto} />
    </div>
  );
};

export default Features;
