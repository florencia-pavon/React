import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="../public/multimedia/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink className="link-categoria" to="categoria/tortas"> Tortas </NavLink>
          </li>
          <li>
            <NavLink className="link-categoria" to="categoria/cookies"> Cookies </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default NavBar;
