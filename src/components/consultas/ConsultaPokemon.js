import React, { useState, useEffect } from "react";

import Image from "../layout/Image";
import styles from "./ConsultaPokemon.module.css"

function ConsultaIniciais({pokemon}) {
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(poke => setPoke(poke))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.pagediv}>
        {poke && (
            <ul className={styles.consult}>
            <li>Nome: {poke && poke.forms[0].name}</li>
            <li>Nº Pokedex: {poke && poke.id}</li>
            <li>
                <Image image={poke.sprites.front_default} alt="Pokemon01" />
                <Image image={poke.sprites.back_default} alt="Pokemon01" />
            </li>
          </ul>
        )}
    </div>
  );
}

export default ConsultaIniciais;