import styles from "./Sobre.module.css"

function Sobre(){
    return <div className={styles.page}>
        <span>Sobre a pokedex</span>
        <p>
        A pokedex é um projeto de consulta de pokemons e de seus tipos. Ela foi feita utilizando a <a href="https://pokeapi.co/" target="_black">PokeApi</a> para a consulta dos pokemons.
        Todos os direitos sobre o conteudo da marca Pokemon pertencem a Pokemon Company.
        </p>
    </div>
}

export default Sobre;