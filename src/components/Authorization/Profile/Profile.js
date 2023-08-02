import styles from './Profile.module.css'
import Header from "../../Common/Header/Header";
import {Link} from "react-router-dom";

export default function Profile() {
    return(
        <>
            <Header />
            <div className={styles.profile}>
                <p className={styles.greeting}>Привет, Виталий!</p>
                <div className={styles.nameInfo}>
                    <p className={styles.nameTitle}>Имя</p>
                    <p className={styles.name}>Виталий</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.emailInfo}>
                    <p className={styles.emailTitle}>E-mail</p>
                    <p className={styles.email}>pochta@yandex.ru</p>
                </div>
                <p className={styles.edit}>Редактировать</p>
                <Link to='/signin' className={styles.exitProfile}>{'Выйти из аккаунта'}</Link>
            </div>
        </>
    )
}
