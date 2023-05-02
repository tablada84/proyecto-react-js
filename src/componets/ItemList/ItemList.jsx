import React from "react";
import Item from "../Item/Item";
const ItemList = ({ data = [] }) => {
  return (
    <div>
      {data.map((Productos) => (
        <Item key={Productos.id} data={Productos} />
      ))}
    </div>
  );
};

export default ItemList;
