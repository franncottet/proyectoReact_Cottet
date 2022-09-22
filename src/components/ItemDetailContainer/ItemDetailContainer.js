import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const caps = [
{id: 1, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.43-AM.jpeg" , category: "gorras", title: "Gorra Nikex"},
{id: 2, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.46-AM.jpeg" , category: "gorras", title: "Gorra Flor"},
{id: 3, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
{id: 4, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
{id: 5, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , category: "pilusos", title: "Piluso Heaven"},
];

const ItemDetailContainer = () => {

 const [data, setData] = useState ({});
 const {detalleId} = useParams()


 useEffect(()=> {
  const getData = new Promise (resolve => {
    setTimeout(() => {
      resolve(caps)
    }, );
  });
  getData.then(res=>setData(res.find(film=>film.id===parseInt(detalleId))))
  
 },[])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer