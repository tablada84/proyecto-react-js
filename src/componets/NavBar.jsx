import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget/Index";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="Nav_link" to="/">
        Caruso-Wine
      </NavLink>

      <ul className="nav_list">
        <li>
          <NavLink className="Nav_link" to="/Productos/Productos">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav_link" to="/Contactos/Contactos">
            Contactos
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav_link" to="cart">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
