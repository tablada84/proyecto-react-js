import React from "react";

import "./NavBar.css";
import CartWidget from "./CartWidget/Index";
const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="Caruso-wine">
        Caruso-wine
      </a>
      <ul>
        <li className="active">
          <a href="/inicio">Inicio</a>
        </li>
        <li>
          <a href="/nosotros">Nosotros</a>
        </li>
        <a href="/contancto">Contactos</a>
        <li>
          <a href="carrito">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
