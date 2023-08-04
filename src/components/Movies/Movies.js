import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import Preloader from "./Preloader/Preloader";
import Header from "../Common/Header/Header";
import React from "react";
import Footer from "../Common/Footer/Footer";

export default function Movies(props) {

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.movies}>
                <SearchForm />
                <MoviesCardList />
                <Preloader movies={props.movies}/>
            </section>
            <Footer />
        </>
    )
}
