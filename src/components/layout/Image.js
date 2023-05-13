import styles from "./Image.module.css"

function Image({image, alt}){
    return <img className={styles.image} src={image} alt={alt} />
}

export default Image;