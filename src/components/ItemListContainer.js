import React, {useState, useEffect} from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

const caps = [
{id: 1, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.43-AM.jpeg" , category: "gorras", title: "Gorra Nikex"},
{id: 2, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.46-AM.jpeg" , category: "gorras", title: "Gorra Flor"},
{id: 3, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
{id: 4, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
{id: 5, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
];



const ItemListContainer = () => {
 const [data, setData] = useState([])

 const {categoriaId} = useParams()

 useEffect(()=>{
  const getData = new Promise(resolve=>{
  setTimeout(() => {
  resolve(caps)
      }, 1000);

 });
 if (categoriaId) {
  getData.then(res => setData(res.filter(cap=>cap.category===categoriaId)))
 }else{
  getData.then(res => setData(res))
 }


 }, [categoriaId])


  const onAdd = (cantidadProductos) => {
alert(`Vas a comprar ${cantidadProductos} productos`)
  }

  return (
    <>
    <Catalog Bienvenida="TrumanCaps" />
    <ItemCount StockDisponible={10} onAdd={onAdd}/>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer