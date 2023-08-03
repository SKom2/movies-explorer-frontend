import styles from "./SearchForm.module.css"

export default function SearchForm(){
    return(
        <>
            <form className={styles.searchForm}>
                <div className={styles.underLine}>
                    <div className={styles.searchFormContainer}>
                        <div className={styles.searchLeftSide}>
                            <div className={styles.searchIcon}></div>
                            <input className={styles.searchInput} type="text" placeholder='Фильм'/>
                        </div>
                        <div className={styles.searchRightSide}>
                            <button type='submit' className={styles.startSearch}></button>
                            <div className={styles.line}></div>
                            <div className={styles.filter}>
                                <div className={styles.filterButton}>
                                    <div className={styles.filterButtonChoice}></div>
                                </div>
                                <p className={styles.filterText}>Короткометражки</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
