import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import Preloader from "../Movies/Preloader/Preloader";

export default function SavedMovies() {
    return(
        <section className={styles.savedMovies}>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
        </section>
    )
}
