import styles from './MoviesCard.module.css'

export default function MoviesCard({movie, onDeleteIconClick}) {

    function formatDuration(durationInMinutes){
        const hours = Math.floor(durationInMinutes / 60);
        const remainingMinutes = durationInMinutes % 60;
        return `${hours}h ${remainingMinutes}m`
    }

    return(
        <article className={styles.moviesCard}>
            <div className={styles.movieInfo}>
                <div className={styles.infoLeftSide}>
                    <p className={styles.movieName}>{movie.nameRU}</p>
                    <p className={styles.movieDuration}>{formatDuration(movie.duration)}</p>
                </div>
                <button className={styles.removeIcon} onClick={() => onDeleteIconClick(movie._id)}></button>
            </div>
            <img className={styles.imageBlock} src={movie.image} alt="Film Cover"/>
        </article>
    )
}
