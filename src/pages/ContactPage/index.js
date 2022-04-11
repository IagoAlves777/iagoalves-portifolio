import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import github from "../../img/github-brands.svg";
import linkedin from "../../img/linkedin-brands.svg";
import "./styles.css";

const ContactPage = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronauta-espaco.json"),
    });
    animate.setSpeed(0.5);
  }, []);
  return (
    <section
      className="contact"
      id="contact"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="section-center">
        <div className="astronauta">
          <div className="astronauta-img" ref={container}></div>
        </div>

        <h2 className="section-title">Contact</h2>
        <div className="section-content">
          <p>Caso tenha interesse em entrar em contato comigo</p>{" "}
          <p>Aqui estão mais informações sobre mim:</p>
          <div className="social-icons">
            <a href="https://github.com/IagoAlves777">
              <img src={github} alt="my github profile" />
            </a>
            <a href="https://www.linkedin.com/in/iago-alves-2232b81b8/">
              <img src={linkedin} alt="my linkedin profile" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
