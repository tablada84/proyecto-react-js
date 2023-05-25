import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrecio } = useCartContext();
  const order = {
    items: cart.map((productos) => ({
      id: productos.id,
      nombre: productos.precio,
      quantity: productos.quantity,
    })),
    total: totalPrecio(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(
      ordersCollection,
      order,
      alert("Su compra se realizo correctamente!!!")
    ).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">Hacer Compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((productos) => (
        <ItemCart key={productos.id} productos={productos} />
      ))}
      <p>total:{totalPrecio()}</p>
      <button onClick={handleClick}>Emitir compras</button>
    </>
  );
};

export default Cart;
