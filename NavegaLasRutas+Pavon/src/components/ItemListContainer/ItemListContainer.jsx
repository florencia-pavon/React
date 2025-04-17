import React, { useEffect, useState } from 'react'
import { getProductos, getProductosCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
      const [productos, setProductos] = useState([])

      const {idCategoria} = useParams()

    useEffect(()=>{
      const funcionProductos = idCategoria ? getProductosCategoria : getProductos;
      funcionProductos(idCategoria)
        .then(res => setProductos(res))

    }, [idCategoria])

  return (
    <>
      <h2 className='titulo'>Listado de Productos</h2>
      <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer