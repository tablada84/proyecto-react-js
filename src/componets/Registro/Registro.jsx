import { useForm } from "react-hook-form";

export const Registro = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");
  return (
    <div>
      <h2>Registro</h2>
      <p>Nombre: {watch("Nombre")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("Nombre", { required: true, maxLength: 10 })}
          />
          {errors.nombre?.type === "required" && <p>EL campo es requerido</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("Emial", { required: true })} />
        </div>
        <div>
          <label>Direccion</label>
          <input type="text" {...register("Direccion", { required: true })} />
          {errors.Direccion?.type === "required" && (
            <p>El campo es requerido</p>
          )}
        </div>
        <div>
          <label>Incluir el telefono?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>
        {incluirTelefono && (
          <div>
            <label>Telefono</label>
            <input type="text" {...register("Telefono")} />
          </div>
        )}
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};
export default Registro;
