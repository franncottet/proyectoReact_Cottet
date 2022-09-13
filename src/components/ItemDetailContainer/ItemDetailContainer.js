import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const cap= { id: 1, image: "https://catalogo.mda.gob.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-11.21.43-AM.jpeg" , title: "Gorra Nike"

}

const ItemDetailContainer = () => {

 const [data, setData] = useState ({});

 useEffect(()=> {
  const getData = new Promise (resolve => {
    setTimeout(() => {
      resolve(cap)
    }, 3000);
  });
  getData.then(res=>setData(res))
  
 },[])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer