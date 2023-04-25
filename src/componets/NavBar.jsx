import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget/Index";

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="Caruso-Wine">
        Caruso-Wine
      </a>
      <ul id="row">
        <li>
          <a href="/inicio">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contancto">Contactos</a>
        </li>
      </ul>
      <a href="carrito">
        <CartWidget />
      </a>
    </nav>
  );
}
