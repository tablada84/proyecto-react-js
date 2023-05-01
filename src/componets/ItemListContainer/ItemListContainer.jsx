import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Productos = [
  {
    id: 1,
    nombre: "malbec",
    precio: 2000,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGft4PQoenXOw8IcManweUpIErU73jU-k3w&usqp=CAU",
    cantidad: 10,
  },
  {
    id: 2,
    nombre: "cavernet suavignon",
    precio: 5000,
    Image:
      "https://www.gogle.com/imgres?imgurl=https%3A%2F%2Fwww.rutiniwines.com%2Fwp-content%2Fuploads%2F2022%2F03%2FPuntajes-Destacados-Para-Nuestros-Vinos_1200x800.jpg&tbnid=LlELFDyNvmemrM&vet=10CAEQMyhoahcKEwjAstXdlNT-AhUAAAAAHQAAAAAQAw..i&imgrefurl=https%3A%2F%2Fwww.rutiniwines.com%2F2022%2F04%2F01%2Fpuntajes-destacados-para-nuestros-vinos%2F&docid=nfvpJaK4BYLS5M&w=1200&h=800&q=imagen%20de%20vinos&ved=0CAEQMyhoahcKEwjAstXdlNT-AhUAAAAAHQAAAAAQAw",
    cantidad: 10,
  },
  {
    id: 3,
    nombre: "chardonne",
    precio: 2000,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS_TURfBr1TYEEQBFG8V9um0eDTu6zriwX7mcWc8zmblFygc3-rbIAEjBKdzsTwoUr60&usqp=CAU",
    cantidad: 10,
  },
  {
    id: 4,
    nombre: "merlot",
    precio: 3000,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaR7H43UkMX6GfI5HYS3QTw0HNPCIUblMZXqpTBdWVZIh1ZQUGQ2tUrQuNm1GNYgXVY8&usqp=CAU",
    cantidad: 10,
  },
  {
    id: 5,
    nombre: "toro",
    precio: 200,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaR7H43UkMX6GfI5HYS3QTw0HNPCIUblMZXqpTBdWVZIh1ZQUGQ2tUrQuNm1GNYgXVY8&usqp=CAU",
    cantidad: 10,
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { ProductosId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 3000);
    });
    if (ProductosId) {
      getData.then((res) =>
        setData(res.filter((Productos) => Productos.Productos === ProductosId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [ProductosId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Title greeting="Bienvenido" />
      <ItemCount Initial={1} stock={10} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
