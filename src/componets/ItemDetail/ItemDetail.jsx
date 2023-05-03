import React from "react";
import "./ItemDetail.css";
const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.nombre}</h1>
          <h3>{data.precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
