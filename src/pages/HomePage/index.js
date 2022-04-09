import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import "./style.css";
import "../../App.css";
const HomePage = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="homePage" id="home">
      <div className="section-center">
        <h2
          className="section-title"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          Hi, I'm Gonca
        </h2>
        <h3 className="mainText" data-aos="zoom-in" data-aos-duration="2000">
          I came here to drink milk and build apps, <br /> and I've just
          finished my milk.
        </h3>
      </div>
    </section>
  );
};

export default HomePage;
