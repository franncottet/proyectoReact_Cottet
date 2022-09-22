import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/">TrumanCaps</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
        <NavLink className="nav-link text-white" to="/categoria/gorras">Gorras</NavLink>
        <NavLink className="nav-link text-white" to="/categoria/pilusos">Pilusos</NavLink>
        <NavLink className="nav-link text-white" to="/categoria/viseras">Viseras</NavLink>
        <NavLink className="nav-link text-white" to="/about">Sobre nosotros</NavLink>
        <NavLink className="nav-link text-white" to="/cart"><CartWidget/></NavLink>
      </div>
    </div>
  </div>
</nav>


        
    </div>
  )
}

export default Navbar