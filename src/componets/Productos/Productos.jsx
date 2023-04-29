import productos from "/data/productos.json";

export const Productos = () => {
  return (
    <>
      <h1>lista</h1>
      <ul>
        {Productos.map((Productos) => (
          <li key={productos.id}>
            <a href={`/productos/${Productos.id}`}>{Productos.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
