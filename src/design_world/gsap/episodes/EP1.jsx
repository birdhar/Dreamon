import React, { useEffect, useRef } from "react";
// import styles from "../GSAP.module.css";
import "./EP1.css";
import { gsap } from "gsap";

function Ep1() {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [blue.current, yellow.current],

      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 },
      { duration: 0.5 }
    );
    gsap.fromTo(
      [red.current, green.current],

      { y: -18 },
      { y: 18, repeat: -1, yoyo: true },
      { duration: 0.5 }
    );
  }, []);

  return (
    <div className="wrapper">
      <svg viewBox="0 0 150 33.2" width="180" height="150">
        <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
        <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
        <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
      </svg>
    </div>
  );
}

export default Ep1;
