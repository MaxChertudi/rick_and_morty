import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import React from 'react';
import {useEffect, useState} from 'react';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';

// class Card extends React.Component{
//    constructor(props){
//       super(props)
      
//       this.state = {isFav : false};
//       this.handleFavorite = this.handleFavorite.bind(this);
//    }
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
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
      
      return( 
      <>
         <div className={styles.card} id={props.id} key={props.id}>
            {isFav ? (<button onClick={handleFavorite}>❤️</button>) 
               : (<button onClick={handleFavorite}>🤍</button>)
            }
            <Link to={`/detail/${props.id}`} > 
               <h2> {props.name} [{props.id}] </h2>
            </Link>
            <button className={styles.boton} onClick={() => props.onClose(props.id)}> X </button>
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


// antes de Redux:
// export default function Card(props) {
//    const {id, onClose, name, gender, image, species, status, origin} = props;

//    return (
//       <>
//          <div className={styles.card} id={id} key={id}>    
//             <Link to={`/detail/${id}`} > 
//                <h2> 
//                   {name} 
//                </h2>
//             </Link>
//             <button className={styles.boton} onClick={() => onClose(id)}> X </button>
//             <img src={image} alt={name} />
//          </div>
//       </>
//    );
// }

//v2