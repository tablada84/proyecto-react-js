import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const Productos = [
  {
    id: 1,
    nombre: "malbec",
    precio: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcXEljq9MzQzHLsUVcUMLpQZm2u3IT8znpw&usqp=CAU",
    cantidad: 10,
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [detalleId] = useParams;
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 3000);
    });
    getData.then((res) =>
      setData(res.find((Productos) => Productos.id === parseInt(detalleId)))
    );
  }, [detalleId]);
  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
