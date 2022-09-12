import React from 'react'
import Item from './Item'


const ItemList = ({data=[]}) => {
  return (
    data.map(cap=> <Item key={cap.id} datos={cap} />)
  )
}

export default ItemList