import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import More from "../Movies/More/More";
import Header from "../Common/Header/Header";
import React, {useContext, useEffect, useState} from "react";
import Footer from "../Common/Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";
import Preloader from "../Movies/Preloader/Preloader";

export default function SavedMovies({maxMoviesToShow, setMoviesToShow, moviesToShow, loadMoreMovies, onDeleteIconClick, setIsLoad, ...props}) {
    const {savedMovies} = useContext(SavedMoviesContext)
    const [moviesNotFound, setMoviesNotFound] = useState(true);


    useEffect(() => {
        const moviesToShow = savedMovies.slice(0, maxMoviesToShow);
        setMoviesToShow(moviesToShow);
        setMoviesNotFound(moviesToShow.length === 0);
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
                    isSavedMoviesPage={true}
                    movies={savedMovies}
                    onGetMovies={props.onGetMovies}
                />
                {props.isLoad ? (
                    <Preloader />
                ) : (
                    <>
                        {moviesNotFound ? (
                            <p className={styles.nothingFound}>Ничего не найдено</p>
                        ) : (
                            <>
                                <MoviesCardList
                                    onSaveIconClick={props.onSaveIconClick}
                                    moviesToShow={moviesToShow}
                                    onDeleteIconClick={onDeleteIconClick}
                                />
                                <More
                                    moviesToShow={moviesToShow}
                                    movies={savedMovies}
                                    onMoreClick={loadMoreMovies}
                                />
                            </>
                        )}
                    </>
                )
                }
            </section>
            <Footer />
        </>
    )
}
