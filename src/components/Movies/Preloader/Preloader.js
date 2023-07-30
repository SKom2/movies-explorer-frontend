import styles from './Preloader.module.css'

export default function Preloader(){
    return(
        <div className={styles.preloader}>
            <div className={styles.preloaderBlock}>
                <p className={styles.text}>Ещё</p>
            </div>
        </div>
    )
}
