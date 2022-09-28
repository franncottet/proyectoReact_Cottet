import React from 'react'
import { useCartContext } from "../../CartContext";
import './CartItem.css'


const CartItem = ({product}) => {
   const {removeProduct} =useCartContext
  return (
    <div className='CartItem'>
        <img src="product.image" alt={product.title}/>
        <div>
            <p>Título: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem