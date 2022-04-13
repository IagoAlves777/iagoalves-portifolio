const NavLinks = ({ className }) => {
  return (
    <ul className={`navLinks ${className}`}>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>Sobre</a>
      </li>
      <li>
        <a href='#projects'>Projetos</a>
      </li>
      <li>
        <a href='#contact'>Contato</a>
      </li>
    </ul>
  );
};

export default NavLinks;
