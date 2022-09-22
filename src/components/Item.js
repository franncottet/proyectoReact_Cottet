import React from 'react'
import "./item.css"
import { Link } from "react-router-dom";


const Item = ({datos}) => {
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