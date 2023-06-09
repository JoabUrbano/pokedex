import styles from "./Input.module.css"

function Input({type, text, name, placeholder, handleOnChange, value}){
    return <div className={styles.form_control}>
        {name && <label htmlFor={name}>{text}:</label>}
        <input 
        type={type}
        text={text}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        />
    </div>
}

export default Input;