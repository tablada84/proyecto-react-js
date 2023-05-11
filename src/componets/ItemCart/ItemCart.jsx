import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./Item.css";
const ItemCart = ({ productos }) => {
  const { removeProductos } = useCartContext();
  return (
    <div className="itemCart">
      <img src={productos.image} alt="{producto.nombre}" />
      <div>
        <p>Nombre: {productos.nombre}</p>
        <p>Cantidad: {productos.quantity}</p>
        <p>Precio: {productos.precio}</p>
        <p>Subtotal: ${productos.quantity * productos.precio}</p>
        <button onClick={() => removeProductos(productos.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
