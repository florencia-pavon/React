import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'
import './ItemListContainer.css'

const ItemListContainer = () => {
      const [productos, setProductos] = useState([])
      const [loading, setLoading] = useState(false)

      const {idCategoria} = useParams()

      useEffect(()=>{
        setLoading(true)
        const misProductos = idCategoria ? query(collection(db,"productos"),where("idCategoria", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
          .then(res => {
              const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
              })
              setProductos(nuevosProductos)
          })
          .catch(error => console.log(error))
          .finally(()=>{
            setLoading(false)
          })
      },[idCategoria])

  return (
    <>
      <h2 className='titulo'>Listado de Productos</h2>
      {loading ? <Loader/> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer