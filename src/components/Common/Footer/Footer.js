import styles from './Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p className={styles.title}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className={styles.line}></div>
            <div className={styles.info}>
                <p className={styles.year}>&copy; 2023</p>
                <div className={styles.links}>
                    <a className={styles.link} href="#">Яндекс.Практикум</a>
                    <a className={styles.link} href="#">Github</a>
                </div>
            </div>
        </div>
    )
}
