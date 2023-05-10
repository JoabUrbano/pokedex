import ConsultaPokemon from "../consultas/ConsultaPokemon";
import Image from "../layout/Image";

import styles from "./OutrasConsultas.module.css"
import seta from "../../img/seta.png";

function ConsultaPikachu() {
  return (
    <div className={styles.page}>
        <ConsultaPokemon pokemon="pichu"/>
        <Image image={seta} alt = "seta"/>
        <ConsultaPokemon pokemon="pikachu"/>
        <Image image={seta} alt = "seta"/>
        <ConsultaPokemon pokemon="raichu"/>
    </div>
  );
}

export default ConsultaPikachu;