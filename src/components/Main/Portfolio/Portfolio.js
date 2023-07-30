import styles from './Portfolio.module.css'

export default function Portfolio() {
    return(
        <div className={styles.portfolio}>
            <p className={styles.title}>Портфолио</p>
            <ul className={styles.links}>
                <li className={styles.linkItem}>
                    <div className={styles.link}>
                        <p className={styles.linkTitle}>Статичный сайт</p>
                        <div className={styles.linkIcon}></div>
                    </div>
                </li>
                <li className={styles.linkItem}>
                    <div className={styles.link}>
                        <p className={styles.linkTitle}>Адаптивный сайт</p>
                        <div className={styles.linkIcon}></div>
                    </div>
                </li>
                <li className={styles.linkItem}>
                    <div className={styles.link}>
                        <p className={styles.linkTitle}>Одностраничное приложение</p>
                        <div className={styles.linkIcon}></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
