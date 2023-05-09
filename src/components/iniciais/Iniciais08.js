import BarraGeracao from "../layout/BarraGeracoes";
import ConsultaPokemon from "../consultas/ConsultaPokemon";

import styles from "./Iniciais.module.css"

function Iniciais08() {
  return (
    <div className={styles.page}>
        <h1>Oitava Geração</h1>
        <ConsultaPokemon pokemon="scorbunny"/>
        <ConsultaPokemon pokemon="sobble"/>
        <ConsultaPokemon pokemon="grookey"/>
        <BarraGeracao />
    </div>
  );
}

export default Iniciais08;