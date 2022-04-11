import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import "./styles.css";
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
    <section id='home'>
      <div className="section-main" data-aos="zoom-in"
          data-aos-duration="2500">
        <div
          className="section-astronauta"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <div className="container">
            <div className="astronauta" ref={container}></div>
          </div>
        </div>
        <div className="section_title">
          <h2 data-aos="zoom-in" data-aos-duration="2500">
            Iago Alves
          </h2>
          <h3 data-aos="zoom-in" data-aos-duration="2500">
            Desenvolvedor Fullstack
          </h3>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HomePage;
