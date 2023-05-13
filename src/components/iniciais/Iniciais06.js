import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais06() {
  return (
    <div className={styles.page}>
        <h1>Sexta Geração</h1>
        <ConsultaPokemon pokemon="fennekin"/>
        <ConsultaPokemon pokemon="froakie"/>
        <ConsultaPokemon pokemon="chespin"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais06;