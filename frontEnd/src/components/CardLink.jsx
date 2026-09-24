import { Link } from "react-router-dom"
import styles from "../styles.module.css"


const CardLink = ({ to, image, imageId}) => {
    return (
        <div className={styles.cardLink}>
            <Link to={to} state={{ image }}>
                <img src={image} alt={imageId}/>
                <p>Level {imageId}</p>
            </Link>
        </div>
    )
}

export default CardLink;