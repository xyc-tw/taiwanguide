import React from "react";

// import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        height: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <hr
        style={{
          width: "90vw",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0,0.1)",
        }}
      />
      <p
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "flex-end",
          fontSize: "1rem",
        }}
      >
        © 2022 Hsinyu Chen
      </p>
    </div>
  );
};

export default Footer;
