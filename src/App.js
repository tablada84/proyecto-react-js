import "./App.css";
import React from "react";
import NavBar from "./componets/NavBar";
import Banner from "./componets/Banner/Banner";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";
import CartProvider from "./Context/CartContext";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxVXYNDaVSJCjl8zWXHg8_0are2GfAXCY",
  authDomain: "primer-proyecto-8ca23.firebaseapp.com",
  projectId: "primer-proyecto-8ca23",
  storageBucket: "primer-proyecto-8ca23.appspot.com",
  messagingSenderId: "1056279460696",
  appId: "1:1056279460696:web:1547252f1be560c219c32d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Banner />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
