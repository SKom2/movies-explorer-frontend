import styles from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({onDeleteIconClick, moviesToShow}){

    return(
        <div className={styles.moviesCardList}>
            {moviesToShow.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    onDeleteIconClick={onDeleteIconClick}
                />
            ))}
        </div>
    )
}
