import React from "react";
import "./Display.css";

import abriginal from "./images/culture/abriginal.jpeg";
import temple from "./images/culture/temple.jpeg";
import wedding from "./images/culture/wedding.jpeg";
import militaryVillage from "./images/culture/militaryVillage.jpeg";

const Culture = ({ clickPhoto }) => {
  return (
    <div className="panels">
      <div
        className="panel active"
        style={{ backgroundImage: `url(${abriginal})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Abriginals</h3>
        <p>
          Taiwanese aborigines peoples are Austronesian peoples, with linguistic
          and cultural ties, as well as some genetic drift to other Austronesian
          peoples.
          <br /> For centuries, they experienced economic competition and
          military conflict with a series of colonizing newcomers. which have
          resulted in varying degrees of language death and loss of original
          cultural identity. Of the approximately 26 known languages of the
          Taiwanese indigenous peoples, at least ten are now extinct, five are
          moribund and several are to some degree endangered.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${temple})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Temple</h3>
        <p>
          The majority of Taiwanese people practice a combination of Buddhism
          and Taoism. 12,279 temples were dedicated to Taoism and Buddhism.
          <br />
          There are tons of God and Godess, correspondingly there are different
          temples.
          <br />
          You can experience different ceremony in each temple.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${wedding})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Wedding</h3>
        <p>
          Wedding are a pretty serious matter and full of cultural features in
          Taiwan. Procedures include like courtship, family approval process,
          engagement ceremony, weddingphotography, and wedding reception. <br />
          If you have the chance to attend a wedding in Taiwan, it would be a
          unforgetable experience.
        </p>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage: `url(${militaryVillage})`,
        }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Military Village</h3>
        <p>
          A military village is a community built in the late 1940s and the
          1950s whose original purpose was to serve as provisional housing for
          soldiers of the Republic of China Armed Forces, along with their
          dependents from mainland China after the Government of ROC retreated
          to Taiwan in 1949. They ended up becoming permanent settlements,
          forming distinct cultures as enclaves of mainlanders in Taiwanese
          cities. Over the years, people have moved out from military villages
          and the space have turned to cultural spots.
        </p>
      </div>
    </div>
  );
};

export default Culture;
