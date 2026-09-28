import styles from "../styles.module.css"
import { useEffect, useState } from "react";
const url = import.meta.env.VITE_API_URL;


const HighScores = () => {
    const [allScores, setAllScores] = useState([]);
    useEffect(() => {
        console.log('highScores');
        async function getAllScores() {
            const response = await fetch(`${url}/api/game/highScores`);
            const data = await response.json();
            data.sort((a, b) => a.time - b.time);
            setAllScores(data);
        }

        getAllScores();
    }, []);

    return (
        <div className={styles.scoresContainer}>
            <div className={styles.scores}>
                <h3>High Scores</h3>
                <div className={styles.scoresList}>
                    {allScores.map((score) => (
                        score.time && (
                            <div className={styles.scoreRow} key={score.id}>
                                <div>Name: {score.name}</div>
                                <div>Score: {score.time}</div>
                                <div>Level: {score.imageId}</div>
                            </div>
                        )
                    ))}


                </div>
            </div>
        </div>

    )
}

export default HighScores;