import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";

const Productos = [
  {
    id: 1,
    nombre: "almendras",
    precio: 200,
    img: "../img/almendra 3.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "nueces",
    precio: 500,
    img: "../img/nueces 3.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "pasas de uva",
    precio: 200,
    img: "../img/pasas negras.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "mixfrutal",
    precio: 300,
    img: "../img/mixfrutal3.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "mani",
    precio: 200,
    img: "../img/mani 3.jpg",
    cantidad: 1,
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Title greeting="Bienvenido" />
      <ItemCount Initial={1} stock={10} onAdd={onAdd} />
      <Productos data={data} />
    </>
  );
};

export default ItemListContainer;
