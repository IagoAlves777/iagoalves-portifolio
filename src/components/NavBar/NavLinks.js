const NavLinks = ({ className, toggleMenu }) => {
  return (
    <ul className={`navLinks ${className}`}>
      <li onClick={toggleMenu}>
        <a href='#home'>Home</a>
      </li>
      <li onClick={toggleMenu}>
        <a href='#about'>Sobre</a>
      </li>
      <li onClick={toggleMenu}>
        <a href='#projects'>Projetos</a>
      </li>
      <li onClick={toggleMenu}>
        <a href='#contact'>Contato</a>
      </li>
    </ul>
  );
};

export default NavLinks;
