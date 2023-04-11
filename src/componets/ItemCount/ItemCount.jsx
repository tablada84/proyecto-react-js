import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ Initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const descuenta = () => {
    setCount(count - 1);
  };

  const incrementa = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={descuenta}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementa}>
        +
      </button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
