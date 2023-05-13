import "./App.css";
import React from "react";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";
import CartProvider from "./Context/CartContext";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Productos/Productos" element={<ItemListContainer />} />
          <Route path="/Vinos/FormularioId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
