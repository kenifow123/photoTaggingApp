import styles from "../styles.module.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div><h1>Where's Waldo Game</h1></div>
                <div><Link to='/' className={styles.homeLink}>Home</Link></div>

            </div>

        </>
    )
}

export default Header;