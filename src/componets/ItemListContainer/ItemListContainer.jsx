import Title from "../Title/Title";

import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Productos = [
  {
    id: 1,
    nombre: "Malbec",
    precio: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcXEljq9MzQzHLsUVcUMLpQZm2u3IT8znpw&usqp=CAU",
    cantidad: 10,
    categoria: "vinoTinto",
  },
  {
    id: 2,
    nombre: "Cabernet Suavignon",
    precio: 5000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5VRvMTK3Kf62bUTqH7Z58yxOVVpV6ifCrA&usqp=CAU",
    cantidad: 10,
    categoria: "vinoTinto1",
  },
  {
    id: 3,
    nombre: "Chardonnay",
    precio: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsF7toHFbMd1z5nGUHazO4LcPrOfHIBfh5rA&usqp=CAU",
    cantidad: 10,
    categoria: "vinoBlanco",
  },
  {
    id: 4,
    nombre: "Malbec",
    precio: 3000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHeaUw6HWk15f4lfj1N9c-BG2nrsXCLsVrQ&usqp=CAU",
    cantidad: 10,
    categoria: "vinoTinto",
  },
  {
    id: 5,
    nombre: "Malbec-Carbernet",
    precio: 2050,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO764MRZzscfPBaukugLmAlMfApbYtJkY9wg&usqp=CAU",
    cantidad: 10,
    categoria: "vinoTinto",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((Productos) => Productos.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <Title greeting="Bienvenido" />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
