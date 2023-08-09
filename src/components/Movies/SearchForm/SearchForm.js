import styles from "./SearchForm.module.css"
import React, {useEffect, useState} from "react";
import {useForm} from "../../../hooks/useForm";

export default function SearchForm({onSubmit, ...props}){
    const {values, handleChange, setValues, errors} = useForm({
        movie: ''
    });
    const [isShortMoviesShown, setIsShortMoviesShown] = useState(false)
    const [isAutocompleteOpen, setIsAutoCompleteOpen] = useState(true)

    function itemClickHandler(e){
        setValues({ ...values, movie: e.target.textContent });
        setIsAutoCompleteOpen(!isAutocompleteOpen)
    }

    function inputClickHandler(){
        setIsAutoCompleteOpen(true)
    }

    const filteredMoviesSearch = (movies, value) => movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase())
    })

    function toggleFilterHandler(e) {
        e.preventDefault();
        setIsShortMoviesShown(!isShortMoviesShown);
    }

    const searchFormSubmitHandler = (e) => {
        e.preventDefault();
        props.onGetMovies(values.movie, isShortMoviesShown)
    };

    return(
        <>
            <form className={styles.searchForm} onSubmit={searchFormSubmitHandler} noValidate>
                <div className={styles.underLine}>
                    <div className={styles.searchFormContainer}>
                        <div className={styles.searchLeftSide}>
                            <div className={styles.searchIcon}></div>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder='Фильм'
                                name="movie"
                                value={values.movie || ''}
                                onChange={handleChange}
                                onClick={inputClickHandler}
                                required
                                autoComplete="off"
                            />
                            <ul className={styles.autocomplete}>
                                {
                                    (values.movie || '') && isAutocompleteOpen ?
                                        (filteredMoviesSearch(props.movies, values.movie || '').map((movie) => (
                                            <li
                                                key={movie.id}
                                                className={styles.autocompleteItem}
                                                onClick={itemClickHandler}
                                            >{movie.nameRU}</li>
                                        ))) : null
                                }
                            </ul>
                        </div>
                        <div className={styles.searchRightSide}>
                            <button type='submit' className={styles.startSearch}></button>
                            <div className={styles.line}></div>
                            <div className={styles.filter}>
                                <button className={styles.filterButton} onClick={toggleFilterHandler}>
                                    <div className={isShortMoviesShown ? styles.filterButtonChoice : styles.filterButtonChoiceNotActive}></div>
                                </button>
                                <p className={styles.filterText}>{isShortMoviesShown ? 'Короткометражки' : 'Все фильмы'}</p>
                            </div>
                        </div>
                    </div>
                    <span className={styles.moviesError}>{errors.movie}</span>
                </div>
            </form>
        </>
    )
}
