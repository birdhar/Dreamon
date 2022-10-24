import React from "react";
import "./GSAPLanding.css";
import { gsap } from "gsap";

function GSAPLanding() {
  var textWrapper = document.querySelector(".header-1");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  gsap.timeline().add({
    targets: ".header-1 .letter",
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 50 * i,
  });

  var textWrapper = document.querySelector(".header-2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  gsap.timeline().add({
    targets: ".header-2 .letter",
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 50 * i,
  });

  gsap.to(".wrapper", {
    top: "-100%",
    // ease: Expo.easeInOut,
    delay: 3.6,
    duration: 2,
  });

  gsap.from(".loader", {
    scaleY: "0%",
    y: 80,
    // ease: Expo.easeInOut,
    delay: 1,
    transformOrigin: "50% 100%",
    duration: 1.6,
  });

  gsap.to(".loader", {
    height: "20vh",
    scaleY: "0%",
    // ease: Expo.easeInOut,
    transformOrigin: "0% -100%",
    duration: 1.6,
  });

  gsap.to(".box", {
    y: "-100%",
    // ease: Expo.easeInOut,
    delay: 3.8,
    duration: 2.4,
  });

  // var tl = new TweenMax.staggerFrom(".menu > div", 2, {
  //     opacity: 0,
  //     y: 30,
  //     ease: Expo.easeInOut,
  //     delay: 4.2
  // }, 0.1);

  // var tl = new TweenMax.staggerFrom(".hero-container > div", 2, {
  //     opacity: 0,
  //     y: 30,
  //     ease: Expo.easeInOut,
  //     delay: 4.2
  // }, 0.1);
  return (
    <>
      <div className="wrapper">
        <div className="loader">GSAPLanding</div>
      </div>

      <div className="container">
        <nav className="menu">
          <div className="menu-left menu-item">
            <span className="menu-link">About</span>
            <span className="menu-link">Contact</span>
          </div>
          <div className="menu-center menu-item">
            <div className="menu-link">Brush</div>
          </div>
          <div className="menu-right menu-item">
            <img src="https://img.icons8.com/search" alt="" />
          </div>
        </nav>

        {/* <---------hero Img------------> */}
        <div className="wrapper-img">
          <div className="box"></div>
          <div>
            <img
              src="https://raw.githubusercontent.com/codegridweb/Minimal-Landing-Page-Animation-Using-GSAP/main/hero-img.jpg"
              className="image"
              alt=""
            />
          </div>
        </div>

        {/* <---------header------------> */}

        <div className="header">
          <h1 className="header-1">Neel</h1>
          <h1 className="header-2">Amstrong</h1>
        </div>

        {/* <!-- hero-container  --> */}
        <div class="hero-container">
          <div class="sidebar-text">003</div>
          <div class="projects">projects</div>
          <div class="img-nav">
            <div class="prev">prev</div>
            <div class="next">next</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GSAPLanding;
