import React from "react";

import "./PersonalCards.css";

import hsinyu from "./personal/hsinyu.jpeg";
import shia from "./personal/shia.jpeg";
import jaxine from "./personal/jaxine.jpeg";

const PersonalCards = () => {
  return (
    <div className="pCards">
      <div className="pCard">
        <div className="profi">
          <img src={hsinyu} />
          <h3>Hsinyu</h3>
          <hr className="line" />
        </div>
        <p>
          City Wanderer, like walking through every corner of the city, like
          trying new things, and always full of energy. Sun bath and Sentō
          lover.
        </p>
      </div>
      <div className="pCard">
        <div className="profi">
          <img src={shia} />
          <h3>Shia</h3>
          <hr className="line" />
        </div>
        <p>
          Urban designer, like to observe the surroundings but also crazy about
          nature. If you can not find her in the beach, then she is in the
          mountain.
        </p>
      </div>
      <div className="pCard">
        <div className="profi">
          <img src={jaxine} />
          <h3>Jaxine</h3>
          <hr className="line" />
        </div>
        <p>
          Food lover, willing to do everything in order to get the food, and eat
          a lot. Animal lover.
        </p>
      </div>
    </div>
  );
};

export default PersonalCards;
