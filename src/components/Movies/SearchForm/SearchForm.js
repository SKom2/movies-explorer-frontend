import styles from "./SearchForm.module.css"

export default function SearchForm(){
    return(
        <>
            <div className={styles.searchForm}>
                <div className={styles.underLine}>
                    <div className={styles.searchFormContainer}>
                        <div className={styles.searchLeftSide}>
                            <div className={styles.searchIcon}></div>
                            <p className={styles.typeMovie}>Фильм</p>
                        </div>
                        <div className={styles.searchRightSide}>
                            <div className={styles.startSearch}></div>
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
            </div>
        </>
    )
}
