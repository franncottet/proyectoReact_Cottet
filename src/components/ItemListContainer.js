import React, {useState, useEffect} from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

const caps = [
{id: 1, price:2000, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.43-AM.jpeg" , category: "gorras", title: "Gorra Nikex"},
{id: 2, price:2000, image: "https://http2.mlstatic.com/D_NQ_NP_795639-MLA47878457967_102021-O.webp" , category: "gorras", title: "Gorra Flor"},
{id: 3, price:2000, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/645/151/products/d_949271-mla48029882175_102021-o-5c3b3d09bde33535f616621135662672-640-0.jpg" , category: "gorras", title: "Gorra Bomb"},
{id: 4, price:2500, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
{id: 5, price:2500, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/645/151/products/d_831188-mla48029924999_102021-o-f0e27225faa6c51a4116621125786007-640-0.jpg" , category: "pilusos", title: "Piluso Angels"},
{id: 6, price:2500, image: "https://algardigital.com.ar/articulo_imagen/60/herencia_3869861101ne_ne_3_1638624584.jpg" , category: "pilusos", title: "Piluso Chains"},
];



const ItemListContainer = () => {
 const [data, setData] = useState([])

 const {categoriaId} = useParams()

 useEffect(()=>{
  const getData = new Promise(resolve=>{
  setTimeout(() => {
  resolve(caps)
      }, );

 });
 if (categoriaId) {
  getData.then(res => setData(res.filter(cap=>cap.category===categoriaId)))
 }else{
  getData.then(res => setData(res));
 }


 }, [categoriaId])


  

  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer