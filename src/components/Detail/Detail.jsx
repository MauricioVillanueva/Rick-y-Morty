import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();
    
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const API_KEY = "2e2b897b4891.93528e4d79d430711417";
        axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
        .then((response) => setCharacter(response.data)
        );
    }, [])

    return  (
        <div>
        {
            // Si character.name existe, mostrar todos los datos. Sino, mostrar "Loading..."
            character.name ? (
                <>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="img"/>
                </>) : (
                    <h3>Loading...</h3>
                )
        }
            
        </div>
    )
};

export default Detail;