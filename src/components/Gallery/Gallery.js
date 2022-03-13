import React from "react";

import "./Gallery.css";

import p1 from "./gallery/alishan.jpeg";
import p2 from "./gallery/beehive_firecrackers.jpeg";
import p3 from "./gallery/beidawushan.jpeg";
import p4 from "./gallery/bubble_tea.jpeg";
import p5 from "./gallery/diving.jpeg";
import p6 from "./gallery/erliao.jpeg";
import p7 from "./gallery/ghost_grappling.jpeg";
import p8 from "./gallery/jialuo_lake.jpeg";
import p9 from "./gallery/jiaming_lake.jpeg";
import p10 from "./gallery/jiufen.jpeg";
import p11 from "./gallery/alishan.jpeg";
import p12 from "./gallery/matcha_mountain.jpeg";
import p13 from "./gallery/national_concert_theater_hall.jpeg";
import p14 from "./gallery/pingxi_sky_lantern .jpeg";
import p15 from "./gallery/salt_garden.jpeg";
import p16 from "./gallery/shuiyang_forest.jpeg";
import p17 from "./gallery/sun_moon_lake.jpeg";
import p18 from "./gallery/taoist_sacrificial_ceremony.jpeg";
import p19 from "./gallery/tea_garden.jpg";
import p20 from "./gallery/yushan.gif";

const Gallery = () => {
  return (
    <div className="section" id="gallery">
      <h1>Gallery</h1>
      <div class="row">
        <div class="column">
          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
          <img src={p4} />
          <img src={p5} />
          <div className="block" />
        </div>
        <div class="column">
          <div className="block" />
          <img src={p6} />
          <img src={p7} />
          <img src={p8} />
          <img src={p9} />
          <img src={p10} />
        </div>
        <div class="column">
          <img src={p11} />
          <img src={p12} />
          <img src={p13} />
          <img src={p14} />
          <img src={p15} />
          <div className="block" />
        </div>
        <div class="column">
          <div className="block" />
          <img src={p16} />
          <img src={p17} />
          <img src={p18} />
          <img src={p19} />
          <img src={p20} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
