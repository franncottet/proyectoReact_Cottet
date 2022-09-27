
import "./item.css"
import { Link } from "react-router-dom";
import React, {useContext} from 'react'
import { CartContext } from '../CartProvider';



const Item = ({datos}) => {
const nombre = useContext(CartContext);
console.log('Item: ', nombre);
  return (
    <Link to={`/detalle/${datos.id}`} className="caps">
    <a href="" className='gorra'>
      <img src={datos.image} alt=""/>
     <p>{datos.title}</p>
    </a>
   </Link>

   
  )
}

export default Item

/*


*/