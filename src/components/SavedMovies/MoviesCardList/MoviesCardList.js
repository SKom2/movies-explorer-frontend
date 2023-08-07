import styles from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext} from "react";
import {SavedMoviesContext} from "../../../contexts/SavedMoviesContext";

export default function MoviesCardList({onDeleteIconClick, value}){
    const {savedMovies} = useContext(SavedMoviesContext)

    const filteredMovies = savedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div className={styles.moviesCardList}>
            {filteredMovies.map((movie) => (
                <MoviesCard
                    key={movie._id}
                    movie={movie}
                    onDeleteIconClick={onDeleteIconClick}
                />
            ))}
        </div>
    )
}
