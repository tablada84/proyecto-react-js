import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <a href=" " className="Productos">
      <img src={data.nombre} alt={data.image} />
      <p>{data.nombre}</p>
      <p>{data.precio}</p>
    </a>
  );
};

export default Item;
