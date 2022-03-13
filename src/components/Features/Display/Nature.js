import React from "react";
import "./Display.css";

import mountain from "./images/nature/mountain.jpeg";
import coast from "./images/nature/coast.jpg";
import diving from "./images/nature/diving.jpeg";
import cycling from "./images/nature/cycling.jpeg";

const Nature = ({ clickPhoto }) => {
  return (
    <div className="panels">
      <div
        className="panel active"
        style={{ backgroundImage: `url(${mountain})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Mountain</h3>
        <p>
          Taiwan has the great number and density of high mountains. Inside the
          area measuring 35,808 square kilometers, there are 286 mountain
          summits over 3,000 meters above sea level on this relatively small
          island.
          <br /> Yushan is the tallest mountain in both Taiwan and East Asia.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${coast})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Coast</h3>
        <p>
          The coastline of Taiwan island is about 1,200 kilometers long. Between
          areas there are different chacateristcs. <br />
          The northern coast is an eroded coast with large undulations.
          <br />
          In the west coasts, there are mostly gravel and sandy beaches.
          <br />
          The east coast is the fault coast. <br />
          And the south coast is mainly composed of coral reefs and gravel
          beaches.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${diving})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Diving</h3>
        <p>
          Taiwan has five major diving regions with fantastic visibility and
          varied marine life year-round. <br />
          In Kenting divers enjoy shore and boat diving in warm waters. The
          marine park boasts 1100 marine species and 80 species of coral.
          Barracuda are common, while rarer sightings include humpback whales.
        </p>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage: `url(${cycling})`,
        }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Cycling</h3>
        <p>
          The circular round-the-country route typically takes between 10 to 12
          days to complete and is a popular activity in Taiwan.
          <br />
          Taiwan is a haven for cyclists. The extensive bike network extends
          over 5,000 kilometers with trails along the coastal roads,
          metropolitan cities and the mountains.
        </p>
      </div>
    </div>
  );
};

export default Nature;
