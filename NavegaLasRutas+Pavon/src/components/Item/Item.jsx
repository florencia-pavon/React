import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, imagen}) => {

  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}>
        <button>Ver Detalles</button>
        </Link>
    </div>
  )
}

export default Item