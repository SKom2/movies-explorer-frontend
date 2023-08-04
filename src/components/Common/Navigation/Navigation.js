import styles from './Navigation.module.css'
import close from '../../../images/CloseNav.svg'
import {Link} from "react-router-dom";

export default function Navigation(props){
    return(
        <div className={!props.isMenuOpened ? `${styles.navigation}` : `${styles.navigationActive}`}>
            <label className={props.isMenuOpened ? `${styles.closeBtn}` : `${styles.burgerBtn}`} onClick={props.onMenuCloseIconClick}>
                <span/>
            </label>
            <div className={styles.navBlock}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLinkItem}><Link className={styles.link} to='/'>{'Главная'}</Link></li>
                    <li className={styles.navLinkItem}><Link className={styles.link} to='/movies'>{'Фильмы'}</Link></li>
                    <li className={styles.navLinkItem}><Link className={styles.link} to='/saved-movies'>{'Сохранённые фильмы'}</Link></li>
                </ul>
                <Link to="/profile" className={styles.accountLink}>
                    <div className={styles.accountLinkBlock}>
                        <p className={styles.accountLinkTitle}>Аккаунт</p>
                        <div className={styles.accountLinkImage}></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
