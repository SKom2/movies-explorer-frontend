import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import Preloader from "./Preloader/Preloader";
import Header from "../Common/Header/Header";
import React from "react";
import Footer from "../Common/Footer/Footer";
import {useForm} from "../../hooks/useForm";

export default function Movies(props) {
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
            <section className={styles.movies}>
                <SearchForm
                    value={values.movie || ''}
                    handleChange={handleChange}
                    errors={errors}
                />
                <MoviesCardList
                    value={values.movie || ''}
                    onSaveIconClick={props.onSaveIconClick}
                />
                <Preloader movies={props.movies}/>
            </section>
            <Footer />
        </>
    )
}
