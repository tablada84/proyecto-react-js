import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({ data }) => {
  const [goToCart, setGoCart] = useState(false);
  const onAdd = (quantity) => {
    setGoCart(true);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.nombre}</h1>
          <h4>{data.precio}</h4>
          {goToCart ? (
            <Link to="/cart">Termino la Compra</Link>
          ) : (
            <ItemCount Initial={3} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
