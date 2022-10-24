import React from "react";
import "./ParalleXScrolling.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ParalleXScrolling() {
  gsap.from("#m1", {
    scrollTrigger: {
      scrub: true,
    },
    y: 200,
  });
  gsap.from("#m2", {
    scrollTrigger: {
      scrub: true,
    },
    y: 200,
  });

  gsap.from("#t2", {
    scrollTrigger: {
      scrub: true,
    },
    x: -50,
  });

  gsap.from("#t1", {
    scrollTrigger: {
      scrub: true,
    },
    x: 50,
  });

  gsap.from("#man", {
    scrollTrigger: {
      scrub: true,
    },
    x: -100,
  });

  gsap.from("#plants", {
    scrollTrigger: {
      scrub: true,
    },
    x: -50,
  });

  gsap.from("#text", {
    scrollTrigger: {
      scrub: true,
    },
    x: 600,
  });
  return (
    <div>
      <header>
        <a href="#" className="logo">
          Qviple
        </a>
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </header>

      <section className="parallelx">
        <h2 id="text">Parallel Website</h2>
        <img src="/images/parallelX/monutain_01.png" alt="alt" id="m1" />

        <img src="/images/parallelX/trees_02.png" alt="alt" id="t2" />
        <img src="/images/parallelX/monutain_02.png" alt="alt" id="m2" />
        <img src="/images/parallelX/trees_01.png" alt="alt" id="t1" />
        <img src="/images/parallelX/man.png" alt="alt" id="man" />
        <img src="/images/parallelX/plants.png" alt="alt" id="plants" />
      </section>

      <section className="sec">
        <h2>Parallel Website</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </div>
  );
}

export default ParalleXScrolling;
