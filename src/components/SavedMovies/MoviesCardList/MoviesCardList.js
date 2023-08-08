import styles from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext} from "react";
import {SavedMoviesContext} from "../../../contexts/SavedMoviesContext";

export default function MoviesCardList({onDeleteIconClick}){
    const {savedMovies} = useContext(SavedMoviesContext)

    return(
        <div className={styles.moviesCardList}>
            {savedMovies.map((movie) => (
                <MoviesCard
                    key={movie._id}
                    movie={movie}
                    onDeleteIconClick={onDeleteIconClick}
                />
            ))}
        </div>
    )
}
