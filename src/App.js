import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart.js";


const App = () => {  
    return (
        <>
       <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/categoria" element={<ItemListContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/categoria" element={<ItemDetailContainer/>} />
            </Routes>
            
            
            
        
        </BrowserRouter>
         </>
    )
 }

export default App;
