import styles from './Profile.module.css'
import Header from "../../Common/Header/Header";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";
import {useForm} from "../../../hooks/useForm";

export default function Profile(props) {
    const {userData} = useContext(CurrentUserContext)
    const {values, handleChange, setValues} = useForm({
        name: userData.name,
        email: userData.email
    });
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        setValues({
            name: userData.name,
            email: userData.email
        });
    }, [userData]);

    function updateProfileHandler(){
        setIsEditing(!isEditing)
        props.onEditClick({name: values.name, email: values.email})
    }

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            {!isEditing ? (
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
                        <a href='#' className={styles.edit} onClick={() => setIsEditing(!isEditing)}>Редактировать</a>
                        <Link to='/signin' className={styles.exitProfile} onClick={props.signOut}>{'Выйти из аккаунта'}</Link>
                    </section>
                )  : (
                    <form className={styles.profile} autoComplete="off">
                        <p className={styles.greeting}>Привет, {userData.name}!</p>
                        <div className={styles.nameInfo}>
                            <label className={styles.nameTitle}>Имя</label>
                            <input
                                type="text"
                                className={styles.nameInput}
                                name="name"
                                value={values.name || ''}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.emailInfo}>
                            <label className={styles.emailTitle}>E-mail</label>
                            <input
                                className={styles.emailInput}
                                type="email"
                                name="email"
                                value={values.email || ''}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <a href='#' className={styles.saveBtn} onClick={updateProfileHandler}>Сохранить</a>
                    </form>
            )}
        </>
    )
}
