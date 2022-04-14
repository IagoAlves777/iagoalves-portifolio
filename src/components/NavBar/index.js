import { useState } from 'react';
import Button from "../Button"
import Logo from '../Logo';
import NavLinks from './NavLinks';
import bars from '../../img/bars-solid.svg';
import times from '../../img/times-solid.svg';
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <Logo />
      <NavLinks className={isMenuOpen ? 'open' : 'close'} toggleMenu= {toggleMenu}/>
      <Button className='toggle' onClick={toggleMenu}>
        <img src={!isMenuOpen ? bars : times} alt='' />
      </Button>
    </nav>
  );
};

export default Navbar;
