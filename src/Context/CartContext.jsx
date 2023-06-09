import React, { useState, useContext, createContext } from "react";
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("carrito ", cart);
  const addProductos = (item, quantity) => {
    let newCart;
    let productos = cart.find((productos) => productos.id === item.id);
    if (productos) {
      productos.quantity += quantity;
      newCart = [...cart, productos];
    } else {
      productos = { ...item, quantity: quantity };
      newCart = [...cart, productos];
    }
    setCart(newCart);
  };

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  };

  const totalProductos = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

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
        totalProductos,
        totalPrecio,
        cart,
      }}
    >
      {children}
      <button onClick={clearCart}>vaciar carrito</button>
    </CartContext.Provider>
  );
};

export default CartProvider;
