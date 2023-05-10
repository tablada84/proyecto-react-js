import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("carrito ", cart);
  const addProductos = (item, quantity) => {
    let newCart;
    let productos = cart.find((productos) => productos.id === item.id);
    if (productos) {
      productos.quantity += quantity;
      newCart = [...cart];
    } else {
      productos = { ...item, quantity: quantity };
      newCart = [...cart, productos];
    }
    setCart(newCart);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((productos) => productos.id === id) ? true : false;

  const removeProductos = (id) =>
    setCart(cart.filter((Productos) => Productos.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProductos,
        addProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
