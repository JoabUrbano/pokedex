import { Link } from "react-router-dom"

import Image from "../layout/Image"

import pokedex from "../../img/Pok dex.webp"
import pokemon01 from "../../img/Pikachu.png"
import pokemon02 from "../../img/Pokemon-PNG-Image.png"

import styles from "./Home.module.css"

function Home(){
    return(
        <div className={styles.home}>
            <Image image={pokemon01} alt="Pokemon01" />
            <Link to="/listainiciais"><Image image={pokedex} alt="Pokedex" /></Link>
            <Image image={pokemon02} alt="Pokemon02" />
        </div>
    )
}

export default Home;