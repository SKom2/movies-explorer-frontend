import styles from './MoviesCard.module.css';
import { moviesApiConfig } from '../../../utils/constants';
import { useContext, useEffect, useState } from 'react';
import { SavedMoviesContext } from '../../../contexts/SavedMoviesContext';

export default function MoviesCard({ movie, onSaveIconClick, onDeleteIconClick }) {
    const [isLiked, setIsLiked] = useState(false);
    const { allSavedMovies } = useContext(SavedMoviesContext);

    useEffect(() => {
        const liked = allSavedMovies.some((savedItem) => {
            return savedItem.movieId === movie.id;
        });
        setIsLiked(liked);
    }, [allSavedMovies, movie]);

    function formatDuration(durationInMinutes) {
        const hours = Math.floor(durationInMinutes / 60);
        const remainingMinutes = durationInMinutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    }

    function handleSave() {
        if (onSaveIconClick) {
            onSaveIconClick({
                ...movie,
                duration: `${movie.duration}`,
                image: `${moviesApiConfig.url}${movie.image.url}`,
                thumbnail: `${moviesApiConfig.url}${movie.image.previewUrl}`,
                movieId: movie.id,
            });
        }
    }

    function handleDelete() {
        if (onDeleteIconClick) {
            onDeleteIconClick(movie._id);
        }
    }

    return (
        <article className={styles.moviesCard}>
            <div className={styles.movieInfo}>
                <div className={styles.infoLeftSide}>
                    <p className={styles.movieName}>{movie.nameRU}</p>
                    <p className={styles.movieDuration}>{formatDuration(movie.duration)}</p>
                </div>
                {onSaveIconClick && (
                    <button className={isLiked ? styles.savedIcon : styles.notSavedIcon} onClick={handleSave}></button>
                )}
                {onDeleteIconClick && (
                    <button className={styles.removeIcon} onClick={handleDelete}></button>
                )}
            </div>
            <img className={styles.imageBlock} src={onSaveIconClick ? `${moviesApiConfig.url}${movie.image.url}` : movie.image} alt="Film Cover" />
        </article>
    );
}
