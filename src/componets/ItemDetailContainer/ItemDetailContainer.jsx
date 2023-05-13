import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
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
    categoria: "nombreCategoria1",
  },
  {
    id: 3,
    nombre: "Chardonnay",
    precio: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsF7toHFbMd1z5nGUHazO4LcPrOfHIBfh5rA&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria1",
  },
  {
    id: 4,
    nombre: "Merlot",
    precio: 3000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHeaUw6HWk15f4lfj1N9c-BG2nrsXCLsVrQ&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria1",
  },
  {
    id: 5,
    nombre: "Malbec-Cabernet",
    precio: 2050,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO764MRZzscfPBaukugLmAlMfApbYtJkY9wg&usqp=CAU",
    cantidad: 10,
    categoria: "nombreCategoria1",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000);
  });
  useEffect(() => {
    getData.then((res) =>
      setData(res.find((Productos) => Productos.id === parseInt(detalleId)))
    );
  }, [detalleId]);
  setData(data);
  return (
    <div>
      <ItemDetail data={data} />;
    </div>
  );
};

export default ItemDetailContainer;
