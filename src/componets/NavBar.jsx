import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Caruso-wine</h1>
        <h2 className="seeCarrito">
          <i class="bi bi-cart3"></i>
        </h2>
      </nav>
    </div>
  );
};

export default NavBar;
