import styles from "./SearchForm.module.css"
import {useState} from "react";
import {useForm} from "../../../hooks/useForm";

export default function SearchForm(){
    const {values, handleChange, errors, isValid} = useForm({
        movie: ''
    });
    const [stateFilterBtn, setStateFilterBtn] = useState(true)

    function handleChangeState(e) {
        e.preventDefault()
        setStateFilterBtn(!stateFilterBtn)
    }

    return(
        <>
            <form className={styles.searchForm} noValidate>
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
                                required/>
                        </div>
                        <div className={styles.searchRightSide}>
                            <button type='submit' className={styles.startSearch}></button>
                            <div className={styles.line}></div>
                            <div className={styles.filter}>
                                <button className={styles.filterButton} onClick={handleChangeState}>
                                    <div className={stateFilterBtn ? styles.filterButtonChoice : styles.filterButtonChoiceNotActive}></div>
                                </button>
                                <p className={styles.filterText}>{stateFilterBtn ? 'Короткометражки' : 'Все фильмы'}</p>
                            </div>
                        </div>
                    </div>
                    <span className={styles.moviesError}>{errors.movie}</span>
                </div>
            </form>
        </>
    )
}
