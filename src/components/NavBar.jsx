import CartWidget from "./CartWidget";
import "../Styles/navbar.css";
import logo from "../assets/image/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="CasAnt Logo" className="logo" />
        <h1 className="logo-text">CasAnt</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
