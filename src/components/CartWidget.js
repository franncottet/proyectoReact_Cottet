import React from 'react'
import { useCartContext } from "../CartContext";


export const CartWidget = (props) => {

  const{totalProducts}=useCartContext(props);
  console.log('props obj:', props)
  return (
    <>
    <i className="bi bi-cart3"></i>
    <span>{totalProducts(props) || ''}</span>
    
    </>
  
  );
}

export default CartWidget