import styles from "./SearchForm.module.css"
import React, {useContext, useEffect, useState} from "react";
import {useForm} from "../../../hooks/useForm";
import {MoviesContext} from "../../../contexts/MoviesContext";

export default function SearchForm({onSubmit, ...props}){
    const {allMovies} = useContext(MoviesContext);
    const {values, handleChange, setValues, errors} = useForm({
        movie: ''
    });
    const [isShortMoviesShown, setIsShortMoviesShown] = useState(false)
    const [isAutocompleteOpen, setIsAutoCompleteOpen] = useState(false)
    const [initialState, setInitialState] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('movieData')
        if (savedData) {
            const { inputValue, isShortMoviesShown } = JSON.parse(savedData)
            setValues({ ...values, movie: inputValue })
            setIsShortMoviesShown(isShortMoviesShown)
        }
    }, [])

    useEffect(() => {
        if (!initialState) return
        searchFormSubmitHandler(new Event("submit"));
    }, [isShortMoviesShown, initialState])

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
        setInitialState(true);
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
                                        (filteredMoviesSearch(allMovies, values.movie || '').map((movie) => (
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
                                <label className={styles.filterButton} onClick={toggleFilterHandler}>
                                    <input
                                        type='checkbox'
                                        className={styles.filterButtonChoice}
                                        checked={isShortMoviesShown}
                                        onChange={toggleFilterHandler}
                                    ></input>
                                    <span className={styles.filterButtonIcon}></span>
                                </label>
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
