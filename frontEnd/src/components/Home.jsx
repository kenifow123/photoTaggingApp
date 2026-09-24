import image1 from "../assets/waldo1.jpg"
import image2 from "../assets/waldo2.jpg"
import image3 from "../assets/waldo3.jpg"
import styles from "../styles.module.css"
import CardLink from "./CardLink.jsx";

const Home = () => {
    return (
        <>
            <div className={styles.levelDiv}>
                <CardLink to={`/level/1`} image={image1} imageId='1'/>
                <CardLink to={`/level/2`} image={image2} imageId='2'/>
                <CardLink to={`/level/3`} image={image3} imageId='3'/>
            </div>
        </>
    )
}

export default Home;