import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div id='Cards' className={styles.cards} key='Cards'>
       {characters.map((item) => {
            return (<Card
            id = {item.id}
            key = {item.id}
            name = {item.name}
            status = {item.status}
            species = {item.species}
            gender = {item.gender}
            origin = {item.origin.name}
            image = {item.image}
            onClose = {onClose}
             />)
         } )  
      }     
   </div>
   );
}
