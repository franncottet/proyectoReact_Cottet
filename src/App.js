import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Navbar from "./components/Navbar.js";


const App = () => {  
    return (
        <>
            <Navbar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
         </>
    )
 }

export default App;
