import "./Item.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const Item = ({ data }) => {
  const nombre = useContext(CartContext);
  console.log("item: ", nombre);
  return (
    <Link to={`/detalle/${data.id}`} className="Productos">
      <img src={data.image} alt={data.nombre} />
      <p>{data.nombre}</p>
      <p>{data.precio}</p>
    </Link>
  );
};

export default Item;
