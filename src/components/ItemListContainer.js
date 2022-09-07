import React from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'


const ItemListContainer = () => {
  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    <ItemCount/>
    </>
  )
}

export default ItemListContainer