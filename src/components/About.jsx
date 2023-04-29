import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About () {
    return (
        <div id='About' className={styles.about}>
            <h1> About Maximo Chertudi</h1>
             <Link to={'/home'} > 
                <button className={styles.boton}> X </button>
             </Link>
             <img src={require("../images/about.png")} alt='about'/> 
         </div>
    )
}

