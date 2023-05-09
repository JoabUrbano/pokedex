import styles from "./Footer.module.css"

function Footer(){
    return <div className={styles.footer}>
        Pokedex by <a href="https://github.com/JoabUrbano"><span>Joab</span></a>&copy; 2023
    </div>
}

export default Footer;