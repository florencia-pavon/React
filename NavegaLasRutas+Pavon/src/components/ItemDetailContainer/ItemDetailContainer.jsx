import React, { useEffect, useState } from 'react'
import { getProductoId } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {idItem} = useParams()

    useEffect(() => {
            getProductoId(idItem)
                .then(res => setProducto(res))
                .catch(err => console.log(err))
        }
        , [idItem])
    
  return (
    
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer