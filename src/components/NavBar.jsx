import CartWidget from "./cart_widget";
import "../styles/navbar.css";
import logo from "../assets/image/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={logo} alt="CasAnt Logo" className="logo" />
          <h1 className="logo-text">CasAnt</h1>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        <li className="dropdown">
          <span className="dropbtn">Categorías ▾</span>
          <div className="dropdown-content">
            <Link to="/categoria/hormigueros">Hormigueros</Link>
            <Link to="/categoria/colonias">Colonias</Link>
            <Link to="/categoria/accesorios">Accesorios</Link>
            <Link to="/categoria/alimento">Alimento</Link>
          </div>
        </li>

        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
