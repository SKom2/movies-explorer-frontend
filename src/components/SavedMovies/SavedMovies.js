import SearchForm from "../MoviesCommon/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCommon/MoviesCardList/MoviesCardList";
import styles from './SavedMovies.module.css'
import More from "../MoviesCommon/More/More";
import Header from "../Common/Header/Header";
import React, {useContext, useEffect, useState} from "react";
import Footer from "../Common/Footer/Footer";
import {SavedMoviesContext} from "../../contexts/SavedMoviesContext";
import Preloader from "../MoviesCommon/Preloader/Preloader";
import * as constants from "../../utils/constants";

export default function SavedMovies({maxMoviesToShow, setMoviesToShow, moviesToShow, loadMoreMovies, onDeleteIconClick, setIsLoad, ...props}) {
    const {savedMovies} = useContext(SavedMoviesContext)
    const [moviesNotFound, setMoviesNotFound] = useState(true);


    useEffect(() => {
        const filteredMovies = savedMovies.slice(0, maxMoviesToShow);
        setMoviesNotFound(filteredMovies.length === 0);
        setMoviesToShow(filteredMovies);
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
                            <p className={styles.nothingFound}>{constants.moviesAttentionMessages.nothingSearched}</p>
                        ) : (
                            <>
                                <MoviesCardList
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
