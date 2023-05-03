import styles from './Nav.module.css';
import SearchBar from './SearchBar.jsx';
import { Navigate, NavLink, Outlet, styleNav} from "react-router-dom";

export default function Nav(props) {
    
   return (      
        <div id='Nav' className={styles.container}>
            <img src={require("../images/logo.png")} alt='logo' width="80" height="60" className={styles.img}/>
            <h1 className={styles.title}> Rick and Morty </h1>
            
            <div id='botones' className={styles.botones}>
              <button className={styles.button} >
                <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : styles.disable)}>
                  <span>About</span>
                </NavLink> 
              </button>

              <button className={styles.botones} >
              <NavLink to='/home' className={({isActive}) => (isActive ? styles.active : styles.disable)}>
                <span>Home</span>
              </NavLink> 
              </button>

              <button className={styles.botones} >
              <NavLink to='/favorites' className={({isActive}) => (isActive ? styles.active : styles.disable)}>
                <span>Favorites</span>
              </NavLink> 
              </button>
            </div>
        <SearchBar props={props}/>
        <Outlet/>
        </div>
   );
}
