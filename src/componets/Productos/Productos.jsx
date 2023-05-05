import { useState } from "react";

export const useSingUpUS = () => {
  const [Productos, setProductos] = useState([{}]);

  setProductos([
    {
      id: 1,
      nombre: "malbec",
      precio: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcXEljq9MzQzHLsUVcUMLpQZm2u3IT8znpw&usqp=CAU",
      cantidad: 10,
    },
    {
      id: 2,
      nombre: "cabernet suavignon",
      precio: 5000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5VRvMTK3Kf62bUTqH7Z58yxOVVpV6ifCrA&usqp=CAU",
      cantidad: 10,
    },
    {
      id: 3,
      nombre: "chardonne",
      precio: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAu4uets4SO6zIhNx2ZPM57CP8RR0_KDNVA&usqp=CAU",
      cantidad: 10,
    },
    {
      id: 4,
      nombre: "merlot",
      precio: 3000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHeaUw6HWk15f4lfj1N9c-BG2nrsXCLsVrQ&usqp=CAU",
      cantidad: 10,
    },
    {
      id: 5,
      nombre: "toro",
      precio: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO764MRZzscfPBaukugLmAlMfApbYtJkY9wg&usqp=CAU",
      cantidad: 10,
    },
  ]);
  return <div>Productos</div>;
};

export default Productos;
