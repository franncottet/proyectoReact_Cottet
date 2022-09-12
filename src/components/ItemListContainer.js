import React, {useState, useEffect} from 'react'
import Catalog from './Catalog'
import ItemCount from './itemcount/ItemCount'
import ItemList from './ItemList'

const caps = [
{id: 1, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.43-AM.jpeg" , title: "Gorra Nikex"},
{id: 2, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.46-AM.jpeg" , title: "Gorra Flor"},
{id: 3, image: "https://i.pinimg.com/736x/73/a5/47/73a547457ae41489618d28d7b3864fff.jpg" , title: "Piluso Heaven"},
];



const ItemListContainer = () => {
 const [data, setData] = useState([])

 useEffect(()=>{
  const getData = new Promise(resolve=>{
  setTimeout(() => {
  resolve(caps)
      }, 1500);

 })
getData.then(res => setData(res))

 }, [])


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