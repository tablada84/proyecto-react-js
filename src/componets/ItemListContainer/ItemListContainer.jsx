import Title from "../Title/Title";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Productos");
    if (categoriaId) {
      const queryfilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryfilter).then((res) =>
        setData(
          res.docs.map((Productos) => ({
            id: Productos.id,
            ...Productos.data(),
          }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((Productos) => ({
            id: Productos.id,
            ...Productos.data(),
          }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <Title greeting="Productos" />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
