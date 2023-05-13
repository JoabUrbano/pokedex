import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais05() {
  return (
    <div className={styles.page}>
        <h1>Quinta Geração</h1>
        <ConsultaPokemon pokemon="tepig"/>
        <ConsultaPokemon pokemon="oshawott"/>
        <ConsultaPokemon pokemon="snivy"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais05;