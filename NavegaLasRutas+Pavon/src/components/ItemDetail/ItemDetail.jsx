import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen, stock, descripcion}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
    }


  return (
    <div className='contenedor-detalle-item'>
        <h2>{nombre}</h2>
        <h3>${precio}</h3>
        <h3>Id: {id}</h3>
        <img src={imagen} alt={nombre} />
        <p className='descripcion'>{descripcion}</p>
        {
          agregarCantidad > 0 ?( <Link className='seguir-comprando' to="/"> Seguir Comprando</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }

    </div>
  )
}

export default ItemDetail