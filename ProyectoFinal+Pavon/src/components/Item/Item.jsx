import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, imagen}) => {

  return (
    <div className='contenedor-item'>
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <h5>${precio}</h5 >
        <p>Código: {id}</p>
        <Link to={`/item/${id}`}>
        <button>Ver Detalles</button>
        </Link>
    </div>
  )
}

export default Item