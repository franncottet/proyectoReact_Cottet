import React, {useState} from 'react'
import "./ItemCount.css"



const ItemCount = ({StockDisponible}) => {

const [contador, setContador] = useState(1);

const incrementar = () => {
  setContador(contador + 1)
}

const decrementar = () => {
  setContador(contador - 1)
}




  return (
    <div id='counter'>
      
      <button 
      className='btn btn-light'
      onClick={decrementar}
      disabled={contador <= 1}
      >-
      </button>
      <span className='mx-2 text-black'>{contador}</span>
      <button 
      className='btn btn-light'
      onClick={incrementar}
      disabled={contador >= StockDisponible}
      >+</button>
<div>
  <button className="mt-2 btn btn-success">Agregar al carrito</button>
</div>
      
      </div>
  )
}

export default ItemCount