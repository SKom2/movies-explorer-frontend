import styles from './More.module.css'

export default function More(props) {


    return (
        <div className={styles.more} onClick={props.onMoreClick}>
            <div className={props.movies.length < 12 ? styles.hidden : styles.moreBlock}>
                <p className={styles.text} >Ещё</p>
            </div>
        </div>
    )
}
