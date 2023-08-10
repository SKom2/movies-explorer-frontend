import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import More from "./More/More";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import {useContext, useEffect, useState} from "react";
import {MoviesContext} from "../../contexts/MoviesContext";
import Preloader from "./Preloader/Preloader";
import * as moviesConstants from '../../utils/constants'

export default function Movies({maxMoviesToShow, setMoviesToShow, moviesToShow, loadMoreMovies, ...props}) {
    const {movies} = useContext(MoviesContext)

    useEffect(() => {
        const moviesToShow = movies.slice(0, maxMoviesToShow);
        setMoviesToShow(moviesToShow);
    }, [movies, maxMoviesToShow]);


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
                {props.isLoad ? (
                        <Preloader />
                    ) : (
                        <>
                            <MoviesCardList
                                onSaveIconClick={props.onSaveIconClick}
                                moviesToShow={moviesToShow}
                            />
                            <More movies={movies} onMoreClick={loadMoreMovies}/>
                        </>
                    )
                }

            </section>
            <Footer />
        </>
    )
}
