import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <a href=" " className="Productos">
      <img src={data.image} alt="" />
      <p>{data.nombre}</p>
    </a>
  );
};

export default Item;
