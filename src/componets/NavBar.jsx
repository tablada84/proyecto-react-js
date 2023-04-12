import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Caruso-wine</h1>
        <ul>
          <li className="active">
            <a href="/inicio">Inicio</a>
          </li>
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
        </ul>
        <h2 className="seeCarrito">
          <i className="bi bi-cart3"></i>
        </h2>
      </nav>
    </div>
  );
};

export default NavBar;
