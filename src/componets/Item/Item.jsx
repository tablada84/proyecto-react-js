import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <a href=" " className="Productos">
      <img src={data.image} alt={data.nombre} />
      <p>{data.nombre}</p>
      <p>{data.precio}</p>
    </a>
  );
};

export default Item;
