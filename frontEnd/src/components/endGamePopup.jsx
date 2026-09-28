import styles from "../styles.module.css";
import { useState } from "react";
const url = import.meta.env.VITE_API_URL;

const EndGamePopup = ({setEndMenu, scoreId, setScoreId, endMenu, endScore}) => {
    const [name, setName] = useState("");

    async function onClose(){
        console.log('onClose clicked');
        const response = await fetch(`${url}/api/game/updateScoreName/${scoreId}/${name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        setEndMenu(false);

        console.log(data);
    }



    return (
        <div className={styles.overlay}>
            <div className={styles.endGamePopup}>
                <h1>Game Complete!</h1>
                <p>Score: {endScore}</p>
                <label htmlFor="name">Name:</label><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default EndGamePopup;