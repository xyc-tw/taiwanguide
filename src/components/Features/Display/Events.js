import React from "react";
import "./Display.css";

import lunarnewyear from "./images/events/lunarnewyear.jpeg";
import newyearseve from "./images/events/newyearseve.jpeg";
import pilgrimage from "./images/events/pilgrimage.jpeg";
import gayparade from "./images/events/gayparade.jpeg";

const Events = ({ clickPhoto }) => {
  return (
    <div className="panels">
      <div
        className="panel active"
        style={{ backgroundImage: `url(${lunarnewyear})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Lunar New Year</h3>
        <p>
          Lunar New Year is the most important holiday in Taiwan which last for
          15 days.
          <br />
          Most significant Lunar New Year traditions in Taiwan include spring
          cleaning, firecrackers, couplets, red envelopes and special food.{" "}
          <br />
          Between countries there are different traditions, most famous like
          Pingxi Sky Lantern Festival, Yanshui Beehive Fireworks Festival and
          Bombing of Master Han Dan.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${newyearseve})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>New Year's Eve</h3>
        <p>
          Taipei 101 NewYear Fireworks starts since the end of 2003. This
          feature is the launch of skyscraper-style fireworks that are rarely
          seen in the world. It was the first time on record that large-scale
          pyrotechnics were set on a skyscraper, and the highest point of
          display was 509.2 meters, located at the top of the tower's spire.
          <br />
          Since it was first held, it has attracted millions of people to watch
          on-site every year, and has become one of the most famous New Year's
          Eve events in the world and Taiwan.
        </p>
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `url(${pilgrimage})` }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Pilgrimage</h3>
        <p>
          The Dajia Mazu Pilgrimage is an annual celebration of the Taoist sea
          goddess Mazu held in Taiwan.
          <br /> During the festival, a statue of Mazu is placed in a litter and
          carried by foot on a round-trip journey from Jenn Lann Temple in
          Dajia, Taichung to Fengtian Temple in Xingang, Chiayi, stopping at
          many more temples along the way.
          <br /> The festival lasts for nine days and attracts large crowds of
          pilgrims, who travel alongside the litter.
        </p>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage: `url(${gayparade})`,
        }}
        onClick={(e) => clickPhoto(e)}
      >
        <h3>Gay Parade</h3>
        <p>
          Taiwan is a LGBT-friendly country. Same-sex marriage in Taiwan became
          legal on 24 May 2019, making Taiwan the first country in Asia to
          legalize same-sex marriage.
          <br /> Taiwan Pride is the annual LGBTQ pride parade in Taiwan. The
          parade was first held in 2003. Although joined by groups from all over
          the country, the primary location has always been the capital city of
          Taipei.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Events;
