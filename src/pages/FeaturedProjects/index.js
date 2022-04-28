import github from "../../img/github-brands.svg";
import link from "../../img/external-link-alt-solid.svg";
import "./styles.css";

const FeaturedProjects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-aos="zoom-in" data-aos-duration="1500">
        Alguns dos meus projetos
      </h2>
      <div className="section-content">
        <div
          className="featured-project"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <h3>Tsoro Yematatu</h3>
          <p className="section-text">
            Jogo de origem africana em turnos em que o objetivo é alinhas 3
            peças no tabuleiro. Projeto desenvolvido utilizando Socket.io para
            tornar o jogo multiplayer e online, um servidor em node js que cuida
            das solicitações do Socket.io.
          </p>
          <div className="technologies">
            <p>React </p>
            <p>Socket.io </p>
            <p>Node </p>
            <p>Bootstrap</p>
          </div>
          <div className="project-social">
            <a href="https://github.com/IagoAlves777/react-tsoro-yematatu" target={"blank"}>
              <img src={github} alt="" />
            </a>
            <a href="http://goncuk.com/" target={"blank"}>
              <img src={link} alt="" />
            </a>
          </div>
        </div>

        <div
          className="featured-project"
          data-aos="fade-up-left"
          data-aos-duration="2500"
        >
          <h3>Mult Form</h3>
          <p className="section-text">
            Um formulario mult etapas para conectar programadores, desenvolvido
            em react utilizando Typescript e Styled Component, o gerenciamento
            do estado do formulario é feito utilizando context API e reducer.
          </p>
          <div className="technologies">
            <p>React </p>
            <p>Typescript </p>
            <p>Styled Component</p>
            <p>Context API </p>
            <p>Reducer</p>
          </div>
          <div className="project-social">
            <a href="https://github.com/IagoAlves777/multform" target={"blank"}>
              <img src={github} alt="" />
            </a>
            <a href="https://github.com/IagoAlves777/multform" target={"blank"}>
              <img src={link} alt="" />
            </a>
          </div>
        </div>

        <div
          className="featured-project"
          data-aos="fade-up-left"
          data-aos-duration="1200"
        >
          <h3>Challenging</h3>
          <p className="section-text">
          Projeto com react, Typescript, Styled Components que consome uma API da riot games e tem como objetivo exibir aos player estatísticas sobre eles. Ainda em desenvolvimento
          </p>
          <div className="technologies">
            <p>React </p>
            <p>Typescript </p>
            <p>Axios </p>
            <p>Styled components</p>
          </div>
          <div className="project-social">
            <a href="https://github.com/IagoAlves777/challenging" target={"blank"}>
              <img src={github} alt="" />
            </a>
            <a href="https://github.com/IagoAlves777/challenging" target={"blank"}>
              <img src={link} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
