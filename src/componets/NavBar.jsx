import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget/Index";

export default function NavBar() {
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
        <li>
          <a href="/contancto">Contactos</a>
        </li>
        <li>
          <a href="carrito">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
}
