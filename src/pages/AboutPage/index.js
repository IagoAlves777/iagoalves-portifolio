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
        <div className="section-div">
          <h2
            className="section-title"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Quem sou eu
          </h2>
        </div>
        <div className="section-content">
          <div className="section-img">
            
            <p className="section-text">
              Apaixonado por tecnologia desde que era só uma criança, durante o
              ensino médio descobri o que era programação e me encantei com esse
              gigantesco universo. Durante a faculdade tentei desenvolver várias
              coisas em várias linguagens diferentes, mas foi nas linguagens web
              que me encontrei. hoje em dia trabalho e estudo cada vez mais para
              que eu possa me desenvolver cada vez mais como um dev fullstack.
              <br />
              Essas são as principais tecnologias que tenho trabalhado:
            </p>
            <div className="foguete" ref={container}></div>
          </div>
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
    </section>
  );
};

export default AboutPage;
