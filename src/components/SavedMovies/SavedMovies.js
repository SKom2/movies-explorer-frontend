import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import More from "../Movies/More/More";
import Header from "../Common/Header/Header";
import React, {useContext, useEffect, useState} from "react";
import Footer from "../Common/Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";
import Preloader from "../Movies/Preloader/Preloader";
import * as moviesConstants from '../../utils/constants'

export default function SavedMovies({maxMoviesToShow, setMoviesToShow, moviesToShow, loadMoreMovies, ...props}) {
    const {savedMovies} = useContext(SavedMoviesContext)


    useEffect(() => {
        const moviesToShow = savedMovies.slice(0, maxMoviesToShow);
        setMoviesToShow(moviesToShow);
    }, [savedMovies, maxMoviesToShow]);

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
                {props.isLoad ? (
                    <Preloader />
                ) : (
                    <>
                        <MoviesCardList
                            onDeleteIconClick={props.onDeleteIconClick}
                            moviesToShow={moviesToShow}
                        />
                        <More
                            movies={savedMovies}
                            onMoreClick={loadMoreMovies}
                        />
                    </>
                )}
            </section>
            <Footer />
        </>
    )
}
