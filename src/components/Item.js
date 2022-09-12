import React from 'react'
import "./item.css"

const Item = (datos) => {
  return (
    <a href="" className='gorra'>
      <img src={datos.image} alt=""/>
     <p>{datos.title}</p>
    </a>
  )
}

export default Item