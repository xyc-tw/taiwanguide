import React from "react";
import PersonalCards from "./PersonalCards";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="section" id="aboutus">
      <h1>Who we are?</h1>
      <p>
        We are three Taiwanese, <br />
        who love traveling and adventure,
        <br />
        and want to introduce people our lovely country <br />
        and share our great experiences.
      </p>

      <PersonalCards />
    </div>
  );
};

export default AboutUs;
