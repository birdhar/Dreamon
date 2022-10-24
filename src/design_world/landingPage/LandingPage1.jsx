import React from "react";
// import style from "./LandingPage1.module.css";
import "./LandingPage1.css";

function LandingPage1() {
  return (
    <div>
      <div id="box1"></div>
      <div id="box2">
        <div id="text">
          Landing <br />
          UI Design
        </div>
      </div>
      <div id="box3">
        <div id="container">
          <div id="logo">
            <img
              src="https://res.cloudinary.com/davims6ce/image/upload/v1597557707/1_pblr2h.png"
              alt="logo"
            />
          </div>
          <div id="menu">
            <ul>
              <li>HOME</li>
              <li>SERVICES</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>HELP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage1;
