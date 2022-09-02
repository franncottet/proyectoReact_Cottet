import React from "react";
import CartWidget from "./CartWidget";


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">TrumanCaps</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">Productos</a>
        <a className="nav-link text-white" href="#">Contacto</a>
        <a className="nav-link text-white" href="#">Sobre nosotros</a>
        <a className="nav-link text-white" href="#"><CartWidget/></a>
      </div>
    </div>
  </div>
</nav>


        
    </div>
  )
}

export default Navbar