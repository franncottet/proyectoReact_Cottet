import React from 'react'
import "./ItemCount.css"

const ItemCount = () => {
  return (
    <div id='counter'>
      
      <button className='btn btn-light'>-</button>
      <span className='mx-2'>2</span>
      <button className='btn btn-light'>+</button>
<div>
  <button className="mt-2 btn btn-success">Agregar al carrito</button>
</div>
      
      </div>
  )
}

export default ItemCount