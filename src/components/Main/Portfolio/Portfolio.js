import styles from './Portfolio.module.css'

export default function Portfolio() {
    return(
        <div className={styles.portfolio}>
            <p className={styles.title}>Портфолио</p>
            <ul className={styles.links}>
                <li className={styles.linkItem}>
                    <a href='https://skom2.github.io/Relvise/' className={styles.link} target='_blank'>
                        <p className={styles.linkTitle}>Статичный сайт</p>
                        <div className={styles.linkIcon}></div>
                    </a>
                </li>
                <li className={styles.linkItem}>
                    <a href='https://skom2.github.io/russian-travel/' className={styles.link} target='_blank'>
                        <p className={styles.linkTitle}>Адаптивный сайт</p>
                        <div className={styles.linkIcon}></div>
                    </a>
                </li>
                <li className={styles.linkItem}>
                    <a href='https://mesto-otdiha.nomoredomains.rocks' className={styles.link} target='_blank'>
                        <p className={styles.linkTitle}>Одностраничное приложение</p>
                        <div className={styles.linkIcon}></div>
                    </a>
                </li>
            </ul>
        </div>
    )
}
