import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import caretright from "../../img/caret-right-solid.svg";
import "./style.css";

const AboutPage = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./foguete.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="about-page" id="about">
      <div className="section_center">
        <div className="section-content">
          <div className="section_c">
            <h2
              className="section-title"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              Quem sou eu
            </h2>
            <div className="section-img">
              <p className="section-text" data-aos="zoom-in"
              data-aos-duration="1000">
                Apaixonado por tecnologia desde que era criança, durante
                o ensino médio descobri o que era programação e me encantei com
                esse gigantesco universo. Durante a faculdade tentei desenvolver
                várias coisas em várias linguagens diferentes, mas foi nas
                tecnologias web que me encontrei. Hoje em dia trabalho e estudo
                cada vez mais para que eu possa me desenvolver da melhor forma
                como um dev fullstack.
                <br />
                Essas são as principais tecnologias que tenho trabalhado:
              </p>
              <div className="technologies">
                <div className="single-technology">
                  <img src={caretright} alt="" />
                  <p>React</p>
                </div>
                <div className="single-technology">
                  <img src={caretright} alt="" />
                  <p>Node JS</p>
                </div>
                <div className="single-technology">
                  <img src={caretright} alt="" />
                  <p>TypeScript</p>
                </div>
                <div className="single-technology">
                  <img src={caretright} alt="" />
                  <p>SQL</p>
                </div>
              </div>
            </div>
          </div>
          <div className="foguete" ref={container} data-aos="fade-up-left" data-aos-duration="3000"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
