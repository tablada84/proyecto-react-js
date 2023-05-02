import React from "react";
import Item from "../Item/Item";
const ItemList = ({ data = [] }) => {
  return (
    <div>
      {data.map((Producto) => (
        <Item key={Producto.id} data={Producto} />
      ))}
    </div>
  );
};

export default ItemList;
