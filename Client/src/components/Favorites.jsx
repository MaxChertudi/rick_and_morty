import styles from './Favorites.module.css'
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from './Card';
import { Link } from "react-router-dom"; 
import { ORDER, FILTER } from '../redux/types';
import { filterCards, orderCards } from '../redux/actions';

const Favorites = ({myFavorites}) => {
   const dispatch = useDispatch();
   const [aux, setAux] = useState(false);

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      setAux(!aux);
   }
   
   const handlefilter = (e) => {
      dispatch(filterCards(e.target.value));
   }

   if(myFavorites.length === 0) {
      return (
         <div className={styles.mensaje}>
            <Link to={'/home'}> 
               <button className={styles.boton} > X </button>
               <h2 className={styles.title}>No existen favoritos</h2>
            </Link>
         </div>
      )
   } else {
      return(
         <div className={styles.favorites} id='favorites' key='favorites'>   
           <div id='selectores'>
            <select name="order" onChange={handleOrder}>  
               <option value="Ascendente">Ascendente</option> 
               <option value="Descendente">Descendente</option> 
            </select> 
            <select name="gender" onChange={handlefilter}>  
               <option value="Male">Male</option> 
               <option value="Female">Female</option> 
               <option value="Genderless">Genderless</option> 
               <option value="unknown">unknown</option> 
            </select> 
            </div>
            <div><p> </p></div>
            <div className={styles.cards}>
            {myFavorites?.map((item) => {
            return (<Card
            id = {item.id}
            keys = {item.id}
            name = {item.name}
            status = {item.status}
            species = {item.species}
            gender = {item.gender}
            origin = {item.origin?.name}
            image = {item.image}
            // onClose = {() => onClose(item.id)}
            />)
            } )  
            }     
            </div>
      </div> )
   }
};

export function mapStateToProps(state) {
   return {myFavorites : state.myFavorites}
}

export function mapDispatchToProps(dispatch) {
   return { orderCards: (orden) => dispatch(orderCards(orden)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

