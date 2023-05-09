import {Link} from "react-router-dom"

import styles from "./BarraGeracoes.module.css"

function BarraGeracao(){
    return <div className={styles.page}>
        <ul className={styles.corpo}>
            <li><Link to="/listainiciais/iniciais01">1</Link></li>
            <li><Link to="/listainiciais/iniciais02">2</Link></li>
            <li><Link to="/listainiciais/iniciais03">3</Link></li>
            <li><Link to="/listainiciais/iniciais04">4</Link></li>
            <li><Link to="/listainiciais/iniciais05">5</Link></li>
            <li><Link to="/listainiciais/iniciais06">6</Link></li>
            <li><Link to="/listainiciais/iniciais07">7</Link></li>
            <li><Link to="/listainiciais/iniciais08">8</Link></li>
            <li><Link to="/listainiciais/iniciais09">9</Link></li>
        </ul>
    </div>
}

export default BarraGeracao;