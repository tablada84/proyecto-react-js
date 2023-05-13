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
    categoria: "nombreCategoria1",
  },
  {
    id: 2,
    nombre: "Cabernet Suavignon",
    precio: 5000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5VRvMTK3Kf62bUTqH7Z58yxOVVpV6ifCrA&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria2",
  },
  {
    id: 3,
    nombre: "Chardonnay",
    precio: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsF7toHFbMd1z5nGUHazO4LcPrOfHIBfh5rA&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria3",
  },
  {
    id: 4,
    nombre: "Merlot",
    precio: 3000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHeaUw6HWk15f4lfj1N9c-BG2nrsXCLsVrQ&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria4",
  },
  {
    id: 5,
    nombre: "Malbec-Carbernet",
    precio: 2050,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO764MRZzscfPBaukugLmAlMfApbYtJkY9wg&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria5",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { FormularioId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 1000);
    });
    if (FormularioId) {
      getData.then((res) =>
        setData.then(
          res.filter((Productos) => Productos.categoria === FormularioId)
        )
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [FormularioId]);

  return (
    <>
      <Title greeting="Bienvenido" />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
