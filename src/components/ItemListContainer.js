import React, {useState, useEffect} from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
 const [data, setData] = useState([])

 const {categoriaId} = useParams()

 useEffect(()=>{
  const querydb = getFirestore();
  const queryCollection = collection (querydb, "caps");
  const queryFilter = query(queryCollection, where("category", "==", categoriaId))
  getDocs(queryFilter)
  .then (res => console.log(res.docs.map(product=>({id: product.id, ...res.data()}))));
  
 /*
 if (categoriaId) {
  getData.then(res => setData(res.filter(cap=>cap.category===categoriaId)))
 }else{
  getData.then(res => setData(res));
 }
*/

 }, [categoriaId])


  

  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer