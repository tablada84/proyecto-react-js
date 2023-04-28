import products_List from "./../Data/Data.json";

const Products = () => {
  return (
    <>
      <h1>Productos</h1>
      <ul>
        {products_List.map((products) => (
          <li key={products.id}>
            <a href={`/products/${products.id} `}>{products.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
