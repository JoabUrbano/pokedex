import Select from "../Forms/Select";
import Button from "../Forms/Button";
import { useState } from "react";

import styles from "./BuscaTipo.module.css";

function BuscaTipo() {
  const [tipo, setTipo] = useState("1");
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <Select
          nome="Selecionar Tipo"
          handleOnChange={(e) => setTipo(e.target.value)}
        />
        <Button type="submit" text="Consultar" />
      </form>

      {data && (
        <ul className={styles.consult}>
            <li><span>Vulneravel contra</span>
                <ul className={styles.second_consult1}>
                    {data.damage_relations.double_damage_from.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </li>
            <li>
              <span>Forte contra</span>
                <ul className={styles.second_consult2}>
                    {data.damage_relations.double_damage_to.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </li>
        </ul>
      )}
    </div>
  );
}

export default BuscaTipo;