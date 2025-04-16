import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../public/multimedia/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <h2>Hola</h2>
            <NavLink to="categoria/tortas"> Tortas </NavLink>
          </li>
          <li>
            <NavLink to="categoria/cookies"> Cookies </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
