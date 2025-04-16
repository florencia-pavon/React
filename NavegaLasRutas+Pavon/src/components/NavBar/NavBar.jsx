import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../public/multimedia/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="categoria/tortas"> Tortas </NavLink>
          </li>
          <li>
            <NavLink to="categoria/cookies"> Cookies </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default NavBar;
