import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, imagen, stock, descripcion}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
    }


  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={imagen} alt={nombre} />
        <p>{descripcion}</p>
        {
          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }

    </div>
  )
}

export default ItemDetail