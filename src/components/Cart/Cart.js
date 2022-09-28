import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length===0) {
      return(
        <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer Compra</Link>
        </>
      );
    }

  return (
    <>
    {
    cart.map(product=><cartItem key={product.id} product={product}/>)
    }
    <p>
      total: {totalPrice()}
    </p>
    
    </>
  )
}

export default Cart