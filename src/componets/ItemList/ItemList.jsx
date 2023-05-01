import React from "react";
import Item from "../Item/Item";
const ItemList = ({ data = [] }) => {
  return data.map((Producto) => <Item key={Producto.id} data={Producto} />);
};

export default ItemList;
