import React from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'


const ItemListContainer = () => {

  

  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    <ItemCount initial={1} StockDisponible={10}/>
    </>
  )
}

export default ItemListContainer