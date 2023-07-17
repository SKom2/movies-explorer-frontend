import styles from "./Header.module.css";
import Logo from "../../../images/Logo.svg"
import {Link, Route, Routes} from "react-router-dom";

export default function Header() {
    return(
        <section className={styles.header}>
            <div className={styles.content}>
                <a href='#' className={styles.logo}><img src={Logo} alt="Movies"/></a>
                <div className={styles.menu}>
                    <Link to="/signup" className={styles.registerLink}>{'Регистрация'}</Link>
                    <div className={styles.linkBlock}>
                        <Link to="/signin" className={styles.loginLink}>{'Войти'}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
