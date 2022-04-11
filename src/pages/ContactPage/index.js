import ContactForm from "../../components/ContactForm"
import github from '../../img/github-brands.svg';
import linkedin from '../../img/linkedin-brands.svg';
import "./styles.css";

const ContactPage = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Contact
        </h2>
        <div className='section-content'>
          <p>Caso tenha interesse em entrar em contato comigo</p> <p>Aqui estão mais informações sobre mim:</p>
          <div className='social-icons'>
            <a href='https://github.com/IagoAlves777'>
              <img src={github} alt='my github profile' />
            </a>
            <a href='https://www.linkedin.com/in/iago-alves-2232b81b8/'>
              <img src={linkedin} alt='my linkedin profile' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
