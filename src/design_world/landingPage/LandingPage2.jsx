import React, { useEffect, useRef } from "react";
import "./LandingPage2.css";
import { gsap } from "gsap";

function LandingPage2() {
  //   const left = useRef(null);
  //   const right = useRef(null);

  useEffect(() => {
    gsap.to(".left", {
      delay: 0.8,
      duration: 2,
      width: "50%",
      ease: "power3.easeInOut",
    });

    gsap.to(".right", {
      delay: 0.6,
      duration: 2,
      width: "50%",
      ease: "power3.easeInOut",
    });

    gsap.to(".nav", {
      delay: 3,
      opacity: 1,
      duration: 2,
      ease: "expo.easeInOut",
    });

    gsap.fromTo(
      ".text h1",
      {
        delay: 0.6,
        duration: 2,
        x: 1000,
        ease: "circ.inOut",
      },
      {
        delay: 0.6,
        duration: 2,
        x: 0,
        ease: "circ.inOut",
      }
    );

    gsap.fromTo(
      ".text p",
      {
        delay: 0.7,
        duration: 2,
        x: 1000,
        ease: "circ.inOut",
      },
      {
        delay: 0.7,
        duration: 2,
        x: 0,
        ease: "circ.inOut",
      }
    );

    gsap.to(".karina", {
      delay: 1.5,
      duration: 2,
      width: "800px",
      ease: "power2.inOut",
    });

    gsap.fromTo(
      ".bottomnav ul li",

      {
        delay: 1,
        x: 1000,
        ease: "circ.inOut",
        duration: 2,
        stagger: 0.08,
      },
      {
        delay: 1,
        x: 0,
        ease: "circ.inOut",
        duration: 2,
        stagger: 0.08,
      }
    );

    gsap.fromTo(
      ".name",
      {
        delay: 1.5,
        duration: 2,
        x: -600,
        ease: "circ.inOut",
      },
      {
        delay: 1.5,
        duration: 2,
        x: 0,
        ease: "circ.inOut",
      }
    );
  }, []);

  return (
    <div class="wrapper">
      <div class="left"></div>
      <div class="right"></div>

      <nav class="nav">
        <ul>
          <li class="logo">unsplash</li>
          <li class="menu">
            <img alt="" src="/images/landing/menu.svg" />
          </li>
          <li class="collection">collection</li>
          <li class="explore">explore</li>
          <li class="search">search</li>
          <li class="profile">
            <div class="img"></div>
          </li>
        </ul>
      </nav>

      <div class="content">
        <div class="img-wrapper">
          <div class="karina"></div>
        </div>

        <div class="info">
          <ul>
            <li>unsplash.com</li>
            <li>@karinates</li>
            <li>karinates.com</li>
            <li>
              <img alt="" src="/images/landing/share.svg" />
            </li>
          </ul>
        </div>

        <div class="text">
          <h1>karina tes</h1>
          <p>Fashion Photographer</p>
        </div>

        <div class="name">karina tes</div>

        <div class="bottomnav">
          <ul>
            <li>profile</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage2;
