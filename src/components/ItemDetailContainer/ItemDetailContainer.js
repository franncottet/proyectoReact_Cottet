import React, {useEffect, useState} from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

 const [data, setData] = useState ({});
 const {detalleId} = useParams()


 useEffect(()=> {
 const querydb = getFirestore();
 const queryDoc = doc(querydb, "products", "3O25KfhhTzUdqr1SwQa7")
 getDoc(queryDoc)
 .then(res=>setData({id: res.id, ...res.data()}));
 },[])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer