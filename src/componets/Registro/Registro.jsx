import { useForm } from "react-hook-form";
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Registro.css";
export const Registro = () => {
  const { cart, totalPrecio } = useCartContext();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      buyer: {
        buyer: data,
      },
      items: cart.map((productos) => ({
        id: productos.id,
        nombre: productos.nombre,
        precio: productos.precio,
        cantidad: productos.cantidad,
        quantity: productos.quantity,
        image: productos.image,
      })),
      total: totalPrecio(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order, alert("Su  registro fue exitoso !!!")).then(
      ({ id }) => console.log(id)
    );
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");
  return (
    <div>
      <h2>Registro</h2>
      <p>nombre: {watch("nombre")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
          />
          {errors.nombre?.type === "required" && <p>EL campo es requerido</p>}
          {errors.nombre?.type === "maxLength" && (
            <p>ELcampo debe tener menos de 6 caracteres</p>
          )}
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            {...register("email", { pattern: /\w+@+[gmail]\w+\.+[a-z]/ })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>
        <div>
          <label>direccion</label>
          <input type="text" {...register("direccion", { required: true })} />
          {errors.direccion?.type === "required" && (
            <p>El campo es requerido</p>
          )}
        </div>

        <div>
          <label>Incluir el telefono?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>
        {incluirTelefono && (
          <div>
            <label>telefono</label>
            <input type="text" {...register("telefono")} />
          </div>
        )}
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};
export default Registro;
