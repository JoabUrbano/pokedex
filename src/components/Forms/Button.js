import styles from "./Button.module.css"
function Button({type, text}){
    return <div className={styles.form_control}>
        <button type={type}>{text}</button>
    </div>
}

export default Button;