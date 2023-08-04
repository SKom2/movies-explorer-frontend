import styles from "./Header.module.css";
import Logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link to='/' className={styles.logo}><img src={Logo} alt="Movies" /></Link>
                {props.isLoggedIn ? (
                    props.isDesktop ? (
                        <div className={styles.registeredMenu}>
                            <Link to="/movies" className={styles.link}>{'Фильмы'}</Link>
                            <Link to="/saved-movies" className={styles.link}>{'Сохранённые фильмы'}</Link>
                            <Link to="/profile" className={styles.accountLink}>
                                <div className={styles.accountLinkBlock}>
                                    <p className={styles.accountLinkTitle}>Аккаунт</p>
                                    <div className={styles.accountLinkImage}></div>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <Navigation
                            isMenuOpened={props.isMenuOpened}
                            onMenuCloseIconClick={props.onMenuIconClick}
                        />

                    )
                ) : (
                    <div className={styles.NotRegisteredMenu}>
                        <Link to="/signup" className={styles.registerLink}>{'Регистрация'}</Link>
                        <Link to="/signin" className={styles.linkBlock}>{'Войти'}</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
