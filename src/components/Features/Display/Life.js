import React from "react";
import "./Display.css";

import nightmarket from "./images/life/nightmarket.jpeg";
import teaceremony from "./images/life/teaceremony.jpeg";
import footmassage from "./images/life/footmassage.jpeg";
import nightlife from "./images/life/nightlife.jpeg";

const Life = ({ clickPhoto }) => {
  return (
    <div className="panels">
      <div
        className="panel active"
        style={{ backgroundImage: `url(${nightmarket})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Night Market</h3>
        <p>
          Night market is a big part of taiwanese life and culture.
          <br /> Night market is famous for their Taiwanese snacks. There are
          usually small tables and stools on the roadside to sit down and enjoy,
          or take them away. Some popular snacks such as oysters, chicken chop,
          grilled sausage, grilled corn, rice blood cake, bubble tea, sweet
          potato balls, shawarma, stinky tofu can be seen everywhere.
          <br />
          At present, there are more than 300 night markets in various counties
          and cities in Taiwan.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${teaceremony})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Tea Ceremony</h3>
        <p>
          Tea was a daily beverage and was also used ceremoniously during
          rituals such as weddings, funerals, and family worship.
          <br />
          The mountains to the south of Taipei, around the town of Maokong, are
          home to a high number of tea plantations and teahouses, making it a
          great place to enjoy this ritual.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${footmassage})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Foot Massage</h3>
        <p>
          Reflexology aims to keep qi flowing through the body, keeping it
          balanced and disease free. In traditional medicine, different body
          parts correspond with different pressure points on the body.
          <br /> Reflexologists use maps of these points in the feet, hands, and
          ears to determine where they should apply pressure.
        </p>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage: `url(${nightlife})`,
        }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Night Life</h3>
        <p>
          There are tons of Live House in Taipei you can spend you night
          relaxingly.
          <br />
          You can find many young bands who coming to Taipei to try their
          carrer.It is also a good place to know people of the same taste.
        </p>
      </div>
    </div>
  );
};

export default Life;
