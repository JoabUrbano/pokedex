import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais04() {
  return (
    <div className={styles.page}>
        <h1>Quarta Geração</h1>
        <ConsultaPokemon pokemon="chimchar"/>
        <ConsultaPokemon pokemon="piplup"/>
        <ConsultaPokemon pokemon="turtwig"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais04;