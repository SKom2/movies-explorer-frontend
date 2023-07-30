import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import Preloader from "./Preloader/Preloader";

export default function Movies(props) {
    return(
        <section className={styles.movies}>
            <Header isLoggedIn={props.isLoggedIn}/>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
            <Footer />
        </section>
    )
}
