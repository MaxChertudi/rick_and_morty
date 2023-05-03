import styles from './Detail.module.css';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
    let [character, setCharacter] = useState({}); 
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    return (
        <>   
           {
            character ? (
            <div id='Detail' className={styles.detail}>
            <Link to={'/home'} > 
            <button className={styles.boton2} > X </button>
            </Link>
               <h1>Detail of {character.name}</h1> 
               <h3> {character.status}</h3> 
               <h3> {character.species}</h3> 
               <h3> {character.gender}</h3> 
               <h3> {character.origin?.name}</h3> 
               <img src={character.image} alt={character.name}/>
            </div>
            )
            : ("")
           }
        </>
    )
}