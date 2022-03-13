import React from "react";

import "./Introduction.css";

const Introduction = ({ changePage }) => {
  return (
    <div className="section" id="contact">
      <h1>How it works?</h1>
      <p>
        You wanna come to Taiwan but dont know how to get start?
        <br />
        Too little time but too many wishes?
        <br />
        Tell us your condition and what you are interesited.
        <br />
        We will do the rest for you!
      </p>
      <p href="#0" className="button" onClick={() => changePage("form")}>
        Contact Us
      </p>
    </div>
  );
};

export default Introduction;
