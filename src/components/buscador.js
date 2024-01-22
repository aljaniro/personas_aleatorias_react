import React, { useContext } from "react";
import { contextPersonas } from "../context/contexto";

function Buscador() {
  const { person, cargar,persona,dispatch } = useContext(contextPersonas);

  console.log(person, "soy persona");

  const enviar = () => {
    dispatch({
      type: "agregar",
      payload: {
        name: person[0].name.first,
        lastname: person[0].name.last,
        phone: person[0].phone,
        foto: person[0].picture.large,
        email: person[0].email,
      },
    });
    cargar();
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          enviar();
        }}
      >
        Generar
      </button>
      {console.log(persona,"soy yo")}
    </div>
  );
}

export default Buscador;
