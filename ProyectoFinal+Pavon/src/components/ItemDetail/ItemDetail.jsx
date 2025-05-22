import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({id, nombre, precio, imagen, stock, descripcion}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
      const item = {id,nombre,precio};
      agregarAlCarrito(item, cantidad)
      toast.success("Su compra fue enviada al carrito",{autoClose: 1000, position: "top-right"})
    }



  return (
    <div className='contenedor-detalle-item'>
        <h2>{nombre}</h2>
        <h4>${precio}</h4>
        <h4 className='codigo'>Codigo: {id}</h4>
        <img src={imagen} alt={nombre} />
        <p className='descripcion'>{descripcion}</p>
        {
          agregarCantidad > 0 ? (
            <div className='botones'>
              <p>Agregaste {agregarCantidad} unidades al carrito</p>
              <Link className='finalizar-compra' to="/cart">Terminar Compra</Link>
              <Link className='seguir-comprando' to="/">Seguir Comprando</Link>
            </div>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
    </div>
  )
}

export default ItemDetail