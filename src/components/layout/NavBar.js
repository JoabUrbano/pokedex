import {Link} from "react-router-dom"

import styles from "./NavBar.module.css"
import logo from "../../img/pokemon-4657023_640.webp"

function NavBar(){
    return(
        <div className={styles.navbar}>
            <Link to="/"><img src={logo} alt="Pokedex" /></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/buscanome">Buscar Pokemon Por Nome</Link></li>
                <li className={styles.item}><Link to="/buscatipo">Buscar Por Tipo</Link></li>
                <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;