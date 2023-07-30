import styles from './MoviesCard.module.css'

export default function MoviesCard(props) {
    return(
        <article className={styles.moviesCard}>
            <div className={styles.movieInfo}>
                <div className={styles.infoLeftSide}>
                    <p className={styles.movieName}>{props.name}</p>
                    <p className={styles.movieDuration}>{props.duration}</p>
                </div>
                {props.saved ? (
                    <div className={styles.savedIcon}></div>
                ) : (
                    <div className={styles.notSavedIcon}></div>
                )}
            </div>
            <img className={styles.imageBlock} src={props.image} alt="Film Cover"/>
        </article>
    )
}
