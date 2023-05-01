import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
const Productos = {
  id: 1,
  nombre: "malbec",
  precio: 200,
  Image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGft4PQoenXOw8IcManweUpIErU73jU-k3w&usqp=CAU",
  cantidad: 10,
};
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
