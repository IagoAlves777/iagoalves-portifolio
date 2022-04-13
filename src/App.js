import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar/index";
import AboutPage from "./pages/AboutPage/index";
import ContactPage from "./pages/ContactPage/index";
import FeaturedProjects from "./pages/FeaturedProjects/index.js";
import HomePage from "./pages/HomePage/index";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar/>
      <HomePage/>
      {/*<AboutPage/> 
      <FeaturedProjects/>
      <ContactPage/> */}
    </>
  );
}

export default App;
