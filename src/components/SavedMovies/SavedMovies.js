import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Common/Header/Header";
import React from "react";
import Footer from "../Common/Footer/Footer";

export default function SavedMovies(props) {
    const savedMovies = props.movies.filter((movie) => movie.saved);

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.savedMovies}>
                <SearchForm />
                <MoviesCardList />
                <Preloader movies={savedMovies}/>
            </section>
            <Footer />
        </>
    )
}
