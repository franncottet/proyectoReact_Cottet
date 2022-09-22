import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart.js";
import About from "./components/About.js";


function App () {  
    return (
        <>
       <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
            
            
            
        
        </BrowserRouter>
         </>
    )
 }

export default App;
