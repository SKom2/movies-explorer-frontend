import styles from './More.module.css'
import {useEffect, useState} from "react";

export default function More(props) {
    const [moviesHidden, setMoviesHidden] = useState(false)

    useEffect(() => {
        if (props.movies.length <= props.moviesToShow.length) {
            setMoviesHidden(true);
        } else {
            setMoviesHidden(false);
        }
    }, [props.movies, props.moviesToShow])

    return (
        <div className={styles.more} onClick={props.onMoreClick}>
            <div className={(props.movies.length < 12 || moviesHidden) ? styles.hidden : styles.moreBlock}>
                <p className={styles.text}>Ещё</p>
            </div>
        </div>
    )
}
