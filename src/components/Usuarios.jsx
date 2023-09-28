import { useEffect, useState } from "react";
//nombre, email, foto de perfil y país
const Usuarios = () => {
  const [usuario, setUsuario] = useState({
    nombre: { first: "" },
    email: "",
    fotoPerfil: { medium: "" },
    pais: "",
  });
  useEffect(() => {
    async function obtenerUsuario() {
      const respuesta = await fetch("https://randomuser.me/api/?results=3");
      const datos = await respuesta.json();
      setUsuario(datos);
    }
    obtenerUsuario();
  }, []);
  return (
    <div>
      <h1>Usuarios:</h1>
      <div>
        <img src={usuario?.fotoPerfil} alt="Foto de perfil del usuario" />
        <p>Nombre: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <p>Pais: {usuario.pais}</p>
      </div>
    </div>
  );
};

export { Usuarios };
