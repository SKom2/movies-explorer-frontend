import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Common/Header/Header";
import React, {useContext} from "react";
import Footer from "../Common/Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";

export default function SavedMovies(props) {
    const {savedMovies} = useContext(SavedMoviesContext)

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.savedMovies}>
                <SearchForm
                    movies={savedMovies}
                    onGetMovies={props.onGetMovies}
                />
                <MoviesCardList
                    onDeleteIconClick={props.onDeleteIconClick}
                />
                <Preloader movies={savedMovies}/>
            </section>
            <Footer />
        </>
    )
}
