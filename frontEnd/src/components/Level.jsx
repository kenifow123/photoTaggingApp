import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles.module.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import waldoThumbnail from '../assets/waldo.jpg'
import wizardThumbnail from '../assets/wizard.jpg'
import odlawThumbnail from '../assets/odlaw.jpg'
import wendaThumbnail from '../assets/wenda.jpg'



const Level = () => {
    const { imageId } = useParams();
    const location = useLocation();
    const image = location.state?.image;
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
    }, []);

    const handleImageClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setPosition({x : x, y : y});
        setShowMenu(true);

        console.log('x:', x);
        console.log('y:', y);
    }

    return (
        <div ref={menuRef} className="levelDiv">
            <div className={styles.imgDiv}>
                <img src={image} alt={imageId} onClick={handleImageClick} />
                {showMenu && (
                    <div className={styles.dropdown} style={{left: position.x, top: position.y}}>
                        <div className={styles.buttonDiv}>
                            {/*<img src="" alt=""/>*/}
                            <button>Waldo</button>
                        </div>
                        <div className={styles.buttonDiv}>
                            {/*<img src="" alt=""/>*/}
                            <button>Wizard</button>
                        </div>
                        <div className={styles.buttonDiv}>
                            {/*<img src="" alt=""/>*/}
                            <button>Odlaw</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Level;