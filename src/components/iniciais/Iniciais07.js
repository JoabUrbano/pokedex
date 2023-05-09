import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais07() {
  return (
    <div className={styles.page}>
        <h1>Setima Geração</h1>
        <ConsultaPokemon pokemon="litten"/>
        <ConsultaPokemon pokemon="popplio"/>
        <ConsultaPokemon pokemon="rowlet"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais07;