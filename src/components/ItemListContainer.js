import React from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'


const ItemListContainer = () => {

  const onAdd = (cantidadProductos) => {
alert(`Vas a comprar ${cantidadProductos} productos`)
  }

  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    <ItemCount StockDisponible={10} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer