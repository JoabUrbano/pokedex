import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais09() {
  return (
    <div className={styles.page}>
        <h1>Nona Geração</h1>
        <ConsultaPokemon pokemon="fuecoco"/>
        <ConsultaPokemon pokemon="quaxly"/>
        <ConsultaPokemon pokemon="sprigatito"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais09;