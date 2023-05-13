import styles from "./Select.module.css"

function Select({name, handleOnChange}){
    return <div className={styles.form_control}>
        <h1>Selecione uma opção</h1>
        <select name={name} onChange={handleOnChange}>
            <option value="1">Tipo Normal</option>
            <option value="2">Tipo Lutador</option>
            <option value="3">Tipo Voador</option>
            <option value="4">Tipo Venenoso</option>
            <option value="5">Tipo Terra</option>
            <option value="6">Tipo Rocha</option>
            <option value="7">Tipo Inseto</option>
            <option value="8">Tipo Fantasma</option>
            <option value="9">Tipo Aço</option>
            <option value="10">Tipo Fogo</option>
            <option value="11">Tipo Água</option>
            <option value="12">Tipo Grama</option>
            <option value="13">Tipo Eletrico</option>
            <option value="14">Tipo Psíquico</option>
            <option value="15">Tipo Gelo</option>
            <option value="16">Tipo Dragão</option>
            <option value="17">Tipo Sombrio</option>
            <option value="18">Tipo Fada</option>
        </select>
    </div>
}

export default Select;