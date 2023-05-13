import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais03() {
  return (
    <div className={styles.page}>
        <h1>Terceira Geração</h1>
        <ConsultaPokemon pokemon="torchic"/>
        <ConsultaPokemon pokemon="mudkip"/>
        <ConsultaPokemon pokemon="treecko"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais03;