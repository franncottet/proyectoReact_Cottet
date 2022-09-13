import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({data}) => {
  return (
    <div className="productContainer">
        <div className='detail'>
            <img src={data.image} alt=""/>
            <h1>{data.title}</h1>
        </div>
    </div>
  )
}

export default ItemDetail