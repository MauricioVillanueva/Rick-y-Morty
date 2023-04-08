import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({id,name,species,gender,image,onClose}) {
   return (
         <div className={styles.divCard}>
            <div className={styles.divBtn}>
               <button onClick={() => onClose(id)} className={styles.btnEsc}>X</button>
               <img  src={image} alt="" />
            </div>
            <Link to={`/detail/${id}`}>
               <h2>Name: {name}</h2>
            </Link>
            <h2>Specie: {species}</h2>
            <h2>Gender: {gender}</h2>
         </div>
   );
}
