import Input from "../Forms/Input"
import Button from "../Forms/Button"
import {useState} from "react"

import styles from "./BuscaNome.module.css"
import Image from "../layout/Image"

function BuscaNome(){

    const [nome, setNome] = useState("");
    const [data, setData] = useState(null);
      
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      };

    return <div className={styles.pagina}>

        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text"
            text="Busca por nome"
            name="buscaPorNome"
            placeholder="Digite o nome do Pokemon"
            handleOnChange={(e) => setNome(e.target.value)}
            value={nome}
            />
            {nome &&(
                <Button type="submit" text="Consultar" />
            )}
        </form>

        {data && (
        <ul className={styles.consult}>
            <li>Nome: {data.forms[0].name}</li>
            <li>Nº Pokedex: {data.id}</li>
            <li>
                <Image image={data.sprites.front_default} alt="Pokemon01" />
                <Image image={data.sprites.back_default} alt="Pokemon01" />
                <Image image={data.sprites.front_shiny} alt="Pokemon01" />
                <Image image={data.sprites.back_shiny} alt="Pokemon01" />
            </li>
        </ul>
    )}

    </div>
}

export default BuscaNome;