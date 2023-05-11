import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
const Cart = () => {
  const { Cart, totalPrecio } = useCartContext();

  if (Cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">Hacer Compras</Link>
      </>
    );
  }

  return (
    <>
      {Cart.map((productos) => (
        <ItemCart key={productos.id} productos={productos} />
      ))}
      <p>total:{totalPrecio()}</p>
    </>
  );
};

export default Cart;
