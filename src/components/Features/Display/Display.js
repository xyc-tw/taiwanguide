import React from "react";
import Culture from "./Culture";
import Nature from "./Nature";
import Life from "./Life";
import Events from "./Events";
import "./Display.css";

const clickPhoto = (e) => {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  e.target.classList.add("active");
};

const Display = ({ activeTopic }) => {
  if (activeTopic === "culture") {
    return <Culture clickPhoto={clickPhoto} />;
  } else if (activeTopic === "nature") {
    return <Nature clickPhoto={clickPhoto} />;
  } else if (activeTopic === "life") {
    return <Life clickPhoto={clickPhoto} />;
  } else if (activeTopic === "events") {
    return <Events clickPhoto={clickPhoto} />;
  }
};

export default Display;
