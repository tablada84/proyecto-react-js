import React from "react";
import CartWidget from "../CartWidget/Index";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Caruso-wine</h1>
        <a className="seeCarrito" href="#">
          <CartWidget />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
