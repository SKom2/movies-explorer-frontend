import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import More from "./More/More";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import {useContext, useEffect, useState} from "react";
import {MoviesContext} from "../../contexts/MoviesContext";
import Preloader from "./Preloader/Preloader";

export default function Movies({maxMoviesToShow, setMoviesToShow, loadMoreMovies, moviesToShow, ...props}) {
    const {movies} = useContext(MoviesContext);
    const [moviesNotFound, setMoviesNotFound] = useState(true);

    useEffect(() => {
        const filteredMovies = movies.slice(0, maxMoviesToShow);
        setMoviesToShow(filteredMovies);
        setMoviesNotFound(filteredMovies.length === 0);
    }, [movies, maxMoviesToShow])

    return (
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.movies}>
                <SearchForm
                    isSavedMoviesPage={false}
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
                                />
                                <More
                                    moviesToShow={moviesToShow}
                                    movies={movies}
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

