import styles from './MoviesCard.module.css'
import {moviesApiConfig} from "../../../utils/constants";

export default function MoviesCard(props) {

    function formatDuration(durationInMinutes){
        const hours = Math.floor(durationInMinutes / 60);
        const remainingMinutes = durationInMinutes % 60;
        return `${hours}h ${remainingMinutes}m`
    }

    

    return(
        <article className={styles.moviesCard}>
            <div className={styles.movieInfo}>
                <div className={styles.infoLeftSide}>
                    <p className={styles.movieName}>{props.name}</p>
                    <p className={styles.movieDuration}>{formatDuration(props.duration)}</p>
                </div>
                {props.saved ? (
                    <button className={styles.savedIcon}></button>
                ) : (
                    <button className={styles.notSavedIcon}></button>
                )}
            </div>
            <img className={styles.imageBlock} src={`${moviesApiConfig.url}${props.image}`} alt="Film Cover"/>
        </article>
    )
}
