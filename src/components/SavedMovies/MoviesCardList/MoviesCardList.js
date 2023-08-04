import styles from "./MoviesCardList.module.css"
import {MoviesConstant} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(){
    return(
        <div className={styles.moviesCardList}>
            {MoviesConstant.map((movie) => (
                movie.saved ? (
                    <MoviesCard key={movie.name} name={movie.name} duration={movie.duration} image={movie.image} saved={movie.saved}/>
                ) : null
            ))}
        </div>
    )
}
