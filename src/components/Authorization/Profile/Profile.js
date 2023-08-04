import styles from './Profile.module.css'
import Header from "../../Common/Header/Header";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";

export default function Profile(props) {
    const {userData} = useContext(CurrentUserContext)

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <section className={styles.profile}>
                <p className={styles.greeting}>Привет, {userData.name}!</p>
                <div className={styles.nameInfo}>
                    <p className={styles.nameTitle}>Имя</p>
                    <p className={styles.name}>{userData.name}</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.emailInfo}>
                    <p className={styles.emailTitle}>E-mail</p>
                    <p className={styles.email}>{userData.email}</p>
                </div>
                <a href='#' className={styles.edit}>Редактировать</a>
                <Link to='/signin' className={styles.exitProfile} onClick={props.signOut}>{'Выйти из аккаунта'}</Link>
            </section>
        </>
    )
}
