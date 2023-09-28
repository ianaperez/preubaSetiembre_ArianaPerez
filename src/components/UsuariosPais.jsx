import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsuariosPais = () => {
  const [usuarioPais, setUsuarioPais] = useState({
    nombre: { first: "" },
    email: "",
    fotoPerfil: { medium: "" },
    pais: "",
    nat: "",
  });

  const { idPais } = useParams;

  useEffect(() => {
    async function obtenerUsuarioPais() {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=3?$nat={idPais}"
        );
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        } else {
          const datos = await response.json();
          setUsuarioPais(datos);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    obtenerUsuarioPais();
  }, [idPais]);

  return <div></div>;
};

export { UsuariosPais };
