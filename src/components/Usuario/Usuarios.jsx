import { useEffect, useState } from "react";
import "./Usuarios.css";
//nombre, email, foto de perfil y país
const Usuarios = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    async function obtenerUsuario() {
      const respuesta = await fetch("https://randomuser.me/api/?results=3");
      const datos = await respuesta.json();
      setUsuario(datos.results);
    }
    obtenerUsuario();
  }, []);

  console.log(usuario);

  return (
    <div class="contenedor">
      <h1>Usuarios:</h1>
      {usuario.map((usuario) => (
        <div class="sub_contenedor">
          <img src={usuario.picture.large} alt="Foto de perfil del usuario" />
          <p>
            <span>Nombre:</span> {usuario.name.first}
          </p>
          <p>
            <span>Email:</span> {usuario.email}
          </p>
          <p>
            <span>Pais:</span> {usuario.location.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export { Usuarios };
