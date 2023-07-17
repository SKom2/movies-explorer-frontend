import styles from "./NavTab.module.css";

export default function NavTab() {
    return(
        <ul className={styles.navTab}>
            <li className={styles.navElement}><a href="#aboutproject" className={styles.navLink}>О проекте</a></li>
            <li className={styles.navElement}><a href="#technologies" className={styles.navLink}>Технологии</a></li>
            <li className={styles.navElement}><a href="#student" className={styles.navLink}>Студент</a></li>
        </ul>
    )
}
