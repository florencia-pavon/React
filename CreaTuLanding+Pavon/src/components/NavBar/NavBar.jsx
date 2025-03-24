import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Tortas</li>
          <li>Budines</li>
          <li>Galletas</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default Navbar