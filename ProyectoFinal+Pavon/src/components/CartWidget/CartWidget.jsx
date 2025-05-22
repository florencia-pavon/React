import { useContext } from "react"
import {CarritoContext} from '../../context/CarritoContext'
import { Link } from "react-router-dom"
import "./CartWidget.css"

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div className="cart-widget-container">
      <Link to="/cart" className="cart-link">
        <i className="bi bi-cart3 cart-icon"></i>
        {cantidadTotal > 0 && <span className="cart-cantidad">{cantidadTotal}</span>}
      </Link>
    </div>

  )
}

export default CartWidget