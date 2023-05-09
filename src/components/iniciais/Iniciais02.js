import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais02() {
  return (
    <div className={styles.page}>
        <h1>Segunda Geração</h1>
        <ConsultaPokemon pokemon="cyndaquil"/>
        <ConsultaPokemon pokemon="totodile"/>
        <ConsultaPokemon pokemon="chikorita"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais02;