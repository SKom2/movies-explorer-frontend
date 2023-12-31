import styles from './ProfileUpdate.module.css'
import Header from "../../Common/Header/Header";
import {useContext, useEffect} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";
import {useForm} from "../../../hooks/useForm";
import {isValidEmail} from "../../../utils/isValidEmail";

export default function ProfileUpdate(props){
    const {userData} = useContext(CurrentUserContext)
    const {values, handleChange, setValues, errors, isValid, setIsValid} = useForm({
        name: userData.name,
        email: userData.email
    });

    useEffect(() => {
        setValues({
            name: userData.name,
            email: userData.email
        });
    }, [userData]);

    useEffect(() => {
        if (userData.name === values.name && userData.email === values.email){
            setIsValid(false);
        }
    }, [userData, setIsValid, values])

    useEffect(() => {
        if (!isValidEmail(values.email)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [values.email, setIsValid]);

    function updateProfileHandler(e){
        e.preventDefault();
        props.onEditClick(values, isValid)
    }

    return(
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                isMenuOpened={props.isMenuOpened}
                onMenuIconClick={props.onMenuIconClick}
                isDesktop={props.isDesktop}
            />
            <form className={styles.profile} autoComplete="off" onSubmit={updateProfileHandler}>
                <p className={styles.greeting}>Привет, {userData.name}!</p>
                <div className={styles.nameInfo}>
                    <label className={styles.nameTitle}>Имя</label>
                    <div className={styles.inputBlock}>
                        <input
                            type="text"
                            className={styles.nameInput}
                            name="name"
                            value={values.name || ''}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                        {errors.name && (<span className={styles.error}>{errors.name}</span>)}
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.emailInfo}>
                    <label className={styles.emailTitle}>E-mail</label>
                    <div className={styles.inputBlock}>
                        <input
                            className={styles.emailInput}
                            type="email"
                            name="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                        {errors.email && (<span className={styles.error}>{errors.email}</span>)}
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <p className={styles.attentionMessageError}>{props.attentionMessage}</p>
                    <button type={"submit"} className={styles.saveBtn}  disabled={!isValid}>Сохранить</button>
                </div>
            </form>
        </>
    )
}
