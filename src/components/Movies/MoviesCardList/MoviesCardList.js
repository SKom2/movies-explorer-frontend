import styles from "./MoviesCardList.module.css"
import Movies from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(){
    return(
        <div className={styles.moviesCardList}>
            {Movies.map((movie) => (
                <MoviesCard name={movie.name} duration={movie.duration} image={movie.image} saved={movie.saved}/>
            ))}
        </div>
    )
}
