import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import Preloader from "./Preloader/Preloader";

export default function Movies() {
    return(
        <section className={styles.movies}>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
        </section>
    )
}
