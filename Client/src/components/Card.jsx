import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import {useEffect, useState} from 'react';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';

function Card(props) {

   const [isFav, setIsFav ] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
      // isFav ? removeFav(id) : addFav(props);
      // setIsFav(!isFav);
   }
   
   let location = useLocation();

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });}, [props.myFavorites]);

      return ( 
      <>
         <div className={styles.card} id={props.id} key={props.id}>
            {isFav ? (<button onClick={handleFavorite}>❤️</button>) 
               : (<button onClick={handleFavorite}>🤍</button>)
            }
            
            {/* <button className={styles.boton2} onClick={() => props.onClose(props.id)} > X </button> */}
            {location.pathname === '/favorites' ? (<button className={styles.boton2} > X </button>) 
              : (<button className={styles.boton2} onClick={() => props.onClose(props.id)} > X </button>) }
              
            <Link to={`/detail/${props.id}`} > 
               <h2> {props.name} [{props.id}] </h2>
            </Link>
            
            <img src={props.image} alt={props.name} />
         </div>
      </> )
};


export function mapDispatchToProps(dispatch) {
   return { addFav : (character) => dispatch(addFav(character)),
            removeFav : (id) => dispatch(removeFav(id)) };
}

export function mapStateToProps(state) {
   return {myFavorites : state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
