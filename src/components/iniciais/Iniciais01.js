import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais01() {
  return (
    <div className={styles.page}>
        <h1>Primeira Geração</h1>
        <ConsultaPokemon pokemon="charmander"/>
        <ConsultaPokemon pokemon="squirtle"/>
        <ConsultaPokemon pokemon="bulbasaur"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais01;