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
          <NavLink className="Nav_link" to="/categoria/vinoTinto">
            Malbec
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav_link" to="/categoria/vinoTinto1">
            Cabernet-suavignon
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav_link" to="/categoria/vinoBlanco/">
            Chardonnay
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
