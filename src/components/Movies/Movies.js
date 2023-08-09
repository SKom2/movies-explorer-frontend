import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import Preloader from "./Preloader/Preloader";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import {useContext} from "react";
import {MoviesContext} from "../../contexts/MoviesContext";

export default function Movies(props) {
    const {movies} = useContext(MoviesContext)

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.movies}>
                <SearchForm
                    onGetMovies={props.onGetMovies}
                    movies={movies}
                />
                <MoviesCardList
                    onSaveIconClick={props.onSaveIconClick}
                />
                <Preloader movies={movies}/>
            </section>
            <Footer />
        </>
    )
}
