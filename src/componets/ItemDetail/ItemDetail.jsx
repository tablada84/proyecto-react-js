import "./ItemDetail.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
export const ItemDetail = ({ data }) => {
  const [goToCart, setGoCart] = useState(false);
  const { addProductos } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoCart(true);
    addProductos(data, quantity);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h3>{data.nombre}</h3>
          <h4>${data.precio}</h4>
          {goToCart ? (
            <Link to="/cart">Terminar Compra</Link>
          ) : (
            <ItemCount Initial={0} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
