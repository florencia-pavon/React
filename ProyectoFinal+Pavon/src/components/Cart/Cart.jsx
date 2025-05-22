import React from 'react'
import { useContext } from 'react'
import {CarritoContext} from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <div className="carrito-vacio">
                <h2>No hay productos en el carrito</h2>
                <Link to="/" className="seguir-comprando">Ver Productos</Link>
            </div>
        );
    }
    
    return (
        <div className="carrito-contenedor">
            {
                carrito.map(producto => (
                    <CartItem key={producto.item.id} {...producto} />
                ))
            }
            <h3 className="subtitulo mt-5">Total: ${total}</h3>
            <h3 className="subtitulo">Cantidad total: {cantidadTotal}</h3>
            <div className="botones">
                <button onClick={vaciarCarrito} className="vaciar-carrito">Vaciar Carrito</button>
                <Link to="/checkout" className="finalizar-compra">Finalizar Compra</Link>
            </div>
        </div>
    );
}
export default Cart