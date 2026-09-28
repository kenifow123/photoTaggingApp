import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles.module.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import waldoThumbnail from '../assets/waldo.jpg'
import wizardThumbnail from '../assets/wizard.jpg'
import odlawThumbnail from '../assets/odlaw.jpg'
import wendaThumbnail from '../assets/wenda.jpg'
const url = import.meta.env.VITE_API_URL;
import EndGamePopup from './endGamePopup.jsx'
import Highscores from './Highscores.jsx'
import { useNavigate } from "react-router-dom"


const Level = () => {
    const { imageId } = useParams();
    const location = useLocation();
    const image = location.state?.image;
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const menuRef = useRef(null);
    const [locations, setLocations] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [scoreId, setScoreId] = useState(null);
    const scoreCreated = useRef(false);
    const [endMenu, setEndMenu] = useState(false);
    const [loading, setLoading] = useState(true);
    const [endScore, setEndScore] = useState(0);



    useEffect(() => {
        const handleClickOutside = (event) => {
            //close menu if clicked outside of image
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        async function getImageLocations(){
            //get all locations in the current image
            console.log('getImageLocations');
            const response = await fetch(`${url}/api/game/locations/${imageId}`);
            const data = await response.json();
            setLocations(data);
            data.forEach(location => {
                setCharacters(prev => {
                    if (prev.some(character => character.id === location.Character.id)) {
                        return prev;
                    }
                    return [...prev, location.Character];
                })
            })

            setLoading(false);

        }

        async function createScore() {
            //create start time in score
            if (scoreCreated.current === imageId) return;
            scoreCreated.current = imageId;

            console.log('create score');
            const response = await fetch(`${url}/api/game/createScore`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imageId: Number(imageId)
                })
            })
            const data = await response.json();
            setScoreId(Number(data.id));
        }
        getImageLocations();
        createScore();
        document.addEventListener("click", handleClickOutside);

        //clean up event listener
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }



    }, [imageId]);

    //print state checker
    // useEffect(() => {
    //     console.log(locations);
    // }, [locations]);

    //send score completedAt to db
    useEffect(() => {
        async function checkEnd() {
            if (!loading && characters.length === 0) {
                console.log('end');
                const response = await fetch(`${url}/api/game/updateGameScore/${scoreId}/`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                const data = await response.json();
                setEndScore(data.time);
                setEndMenu(true);
            }
        }
        checkEnd();

    }, [characters.length, loading])


    const handleImageClick = (event) => {
        //clicking on the image
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setPosition({x : x, y : y});
        setShowMenu(true);

        console.log('x:', x);
        console.log('y:', y);
    }

    const handleAnswerSubmit = async (event) => {
        //choosing character option from menu
        event.preventDefault();
        const characterId = Number(event.currentTarget.value);
        // console.log(imageId, characterId, position.y, position.x);
        const response = await fetch(`${url}/api/game/checkAnswer`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageId: imageId,
                characterId: characterId,
                longitude: position.y,
                latitude: position.x
            })
        });
        const data = await response.json();

        if (data) {
            console.log('removing location and characters')
            setLocations(prev =>
                prev.filter(location => location.charId !== characterId));
            setCharacters(prev => prev.filter(character => character.id !== characterId));
        }
        setShowMenu(false);

    }

    return (
        <div ref={menuRef} className={styles.levelDiv}>
            <div className={styles.imgDiv}>
                <img src={image} alt={imageId} onClick={handleImageClick} />
                {showMenu && (
                    <div className={styles.dropdown} style={{left: position.x, top: position.y}}>
                        <div className={styles.buttonDiv}>
                            {/*<img src="" alt=""/>*/}
                            {characters.map(character => (
                                <button onClick={handleAnswerSubmit} key={character.id} value={character.id}>{character.name}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {endMenu && (
                <EndGamePopup setEndMenu={setEndMenu} scoreId={scoreId} setScoreId={setScoreId} endMenu={endMenu} endScore={endScore}/>
            )}

            {/*<Highscores/>*/}
        </div>
    )
}

export default Level;