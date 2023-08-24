import styles from './Profile.module.css'
import Header from "../../Common/Header/Header";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";

export default function Profile(props) {
    const {userData} = useContext(CurrentUserContext)

    useEffect(() => {
        if (props.attentionMessage !== 'Данные успешно обновлены')
        props.setAttentionMessage('')
    })

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
                        <div className={styles.linkContainer}>
                            <p className={styles.attentionMessage}>{props.attentionMessage}</p>
                            <Link to='/profile-update' className={styles.edit} onClick={() => {
                                props.setAttentionMessage('')
                            }}>Редактировать</Link>
                            <Link to='/signin' className={styles.exitProfile} onClick={props.signOut}>{'Выйти из аккаунта'}</Link>
                        </div>
                    </section>
        </>
    )
}
