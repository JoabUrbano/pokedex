import ConsultaPokemon from "../consultas/ConsultaPokemon";
import Image from "../layout/Image";

import styles from "./OutrasConsultas.module.css"
import seta from "../../img/seta.png";

function ConsultaMunchlax() {
  return (
    <div className={styles.page}>
        <ConsultaPokemon pokemon="munchlax"/>
        <Image image={seta} alt = "seta"/>
        <ConsultaPokemon pokemon="snorlax"/>
    </div>
  );
}

export default ConsultaMunchlax;