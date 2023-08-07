import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Common/Header/Header";
import React from "react";
import Footer from "../Common/Footer/Footer";
import {useForm} from "../../hooks/useForm";

export default function SavedMovies(props) {
    const savedMovies = props.movies.filter((movie) => movie.saved);
    const {values, handleChange, errors, isValid} = useForm({
        movie: ''
    });

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
                    value={values.movie || ''}
                    handleChange={handleChange}
                    errors={errors}
                />
                <MoviesCardList
                    value={values.movie || ''}
                    onDeleteIconClick={props.onDeleteIconClick}
                />
                <Preloader movies={savedMovies}/>
            </section>
            <Footer />
        </>
    )
}
