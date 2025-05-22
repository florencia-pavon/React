import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CartItem.css'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className='contenedor-item mt-5'>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>${item.precio}</p>
        <button className='eliminar' onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem