import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import styles from './Movies.module.css'
import More from "./More/More";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import {useContext, useEffect, useState} from "react";
import {MoviesContext} from "../../contexts/MoviesContext";
import Preloader from "./Preloader/Preloader";

export default function Movies({maxMoviesToShow, setMoviesToShow, moviesToShow, loadMoreMovies, ...props}) {
    const {movies} = useContext(MoviesContext);
    const [moviesNotFound, setMoviesNotFound] = useState(true);

    useEffect(() => {
        const moviesToShow = movies.slice(0, maxMoviesToShow);
        setMoviesToShow(moviesToShow);
        setMoviesNotFound(moviesToShow.length === 0);
    }, [movies, maxMoviesToShow]);

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
                    onGetMovies={props.onGetMovies}
                    movies={movies}
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
                                <More movies={movies} onMoreClick={loadMoreMovies}/>
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

