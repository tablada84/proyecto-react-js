import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import React from "react";

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((Products) => {
    return (
      <div className="card">
        <img src={Products.img} alt="img-products-card" />
        <h3>{Products.name}</h3>
        <h3>{Products.price}$</h3>
        <button>Comprar</button>
      </div>
    );
  });
};

export default Products;
