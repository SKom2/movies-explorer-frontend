import styles from './Preloader.module.css'

export default function Preloader(props) {


    return (
        <div className={styles.preloader}>
            <div className={props.movies.length < 12 ? styles.hidden : styles.preloaderBlock}>
                <p className={styles.text}>Ещё</p>
            </div>
        </div>
    )
}
