import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const comprarProductos = () => {};
  return (
    <Link to={`/detalle/${data.id}`} className="Productos">
      <img src={data.image} alt={data.nombre} />
      <p>{data.nombre}</p>
      <p>${data.precio}</p>
      <button onClick={comprarProductos}>Comprar</button>
    </Link>
  );
};

export default Item;
