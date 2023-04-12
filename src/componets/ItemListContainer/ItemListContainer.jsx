import React from "react";
import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = ({ texto }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Title greeting={texto} />
      <ItemCount Initial={1} stock={10} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
