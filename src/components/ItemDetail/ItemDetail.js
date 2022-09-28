import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemcount/ItemCount'
import "./ItemDetail.css"
import {useCartContext} from '../../CartContext'



const ItemDetail = ({data}) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false)
  const addProduct = useCartContext

 

const onAdd = (quantity) => {
setIrAlCarrito(true)
addProduct(data, quantity)
  }

  return (
    <div className="productContainer">
        <div className='detail'>
            <img src={data.image} alt=""/>
            <h1>{data.title}</h1>
            {
              irAlCarrito
              ? <Link to="/cart">Finalizar compra</Link>
              :<ItemCount initial={3} stock={5} onAdd={onAdd} />
            }
            
            
        </div>
    </div>
  )
}

export default ItemDetail