import React, { useEffect } from "react";
import "./LandingPage3.css";
import { gsap } from "gsap";
import Parallax from "parallax-js";

function LandingPage3() {
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);
    gsap.fromTo(
      ".logo",
      {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "expo.inOut",
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".menu-links ul li",

      {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "power3.inOut",
        stagger: 0.08,
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power3.inOut",
        stagger: 0.08,
      }
    );

    gsap.fromTo(
      ".search",
      {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        x: -20,
        ease: "expo.inOut",
      },
      {
        delay: 0.5,
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".account",
      {
        delay: 0.6,
        duration: 1,
        opacity: 0,
        x: -20,
        ease: "expo.inOut",
      },
      {
        delay: 0.6,
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".cart",
      {
        delay: 0.7,
        duration: 1,
        opacity: 0,
        x: -20,
        ease: "expo.inOut",
      },
      {
        delay: 0.7,
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".juice",
      {
        delay: 2,
        duration: 1,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2,
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".leaves .layer:nth-child(1)",
      {
        delay: 2,
        duration: 2,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2,
        duration: 2,
        opacity: 0,
        y: 1,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".leaves .layer:nth-child(2)",
      {
        delay: 2.1,
        duration: 2,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2.1,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".leaves .layer:nth-child(3)",
      {
        delay: 2.2,
        duration: 2,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2.2,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".leaves .layer:nth-child(4)",
      {
        delay: 2.3,
        duration: 2,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2.3,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".leaves .layer:nth-child(5)",
      {
        delay: 2.5,
        duration: 2,
        opacity: 0,
        y: -800,
        ease: "expo.inOut",
      },
      {
        delay: 2.5,
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".title",
      {
        duration: 1,
        delay: 1,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 1,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".tagline",
      {
        duration: 1,
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 1.3,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".pages",
      {
        duration: 1,
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 1.3,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".more",
      {
        duration: 1,
        delay: 1.4,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 1.4,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".desc",
      {
        duration: 1,
        delay: 1.4,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 1.4,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      }
    );

    gsap.fromTo(
      ".arrows",
      {
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: "expo.inOut",
      },
      {
        duration: 1,
        delay: 2,
        opacity: 1,
        ease: "expo.inOut",
      }
    );
  }, []);
  return (
    <div class="wrapper">
      <div class="nav">
        <div class="logo">Clean Juice</div>

        <div class="menu-links">
          <ul>
            <li>locations</li>
            <li>our menu</li>
            <li>our story</li>
            <li>meet our teem</li>
            <li>own a clean juice</li>
            <li>contact us</li>
          </ul>
        </div>

        <div class="search">
          <img src="/images/landing3/search.svg" />
        </div>

        <div class="account">my account</div>

        <div class="cart">
          <img src="/images/landing3/cart.svg" />
        </div>
      </div>

      <div class="content">
        <div class="tagline">Find your clean juice</div>

        <div class="pages">
          <span>2</span>/21
        </div>

        <div class="title">orange</div>

        <div class="more">
          <a href="#">show all the juices</a>
        </div>

        <div class="desc">
          <p>
            Your <span>healthy</span> life <br />
            starts here with us
          </p>
          <p>
            A family owned company founded with the purpose of giving your
            family access to clean, organic products while you are on the go.
          </p>
        </div>
      </div>

      <div class="juice">
        <img src="./images/landing3/juice.png" alt="" />
      </div>

      <div class="leaves">
        <ul id="scene">
          <li class="layer" data-depth="-.1">
            <img src="/images/landing3/leaf01.png" alt="" />
          </li>

          <li class="layer" data-depth="-.3">
            <img src="/images/landing3/leaf02.png" alt="" />
          </li>
          <li class="layer" data-depth="-1.5">
            <img src="/images/landing3/leaf03.png" alt="" />
          </li>
          <li class="layer" data-depth=".1">
            <img src="/images/landing3/leaf04.png" alt="" />
          </li>
          <li class="layer" data-depth=".3">
            <img src="/images/landing3/leaf05.png" alt="" />
          </li>
        </ul>
      </div>

      <div class="arrows">
        <button class="prev">
          <img src="/images/landing3/left.svg" />
        </button>
        <button class="next">
          <img src="/images/landing3/right.svg" />
        </button>
      </div>
    </div>
  );
}

export default LandingPage3;
