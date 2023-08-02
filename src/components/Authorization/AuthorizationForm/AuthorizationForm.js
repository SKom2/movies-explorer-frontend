import styles from './AuthorizationForm.module.css'
import {Link} from "react-router-dom";
import Logo from "../../../images/Logo.svg";

export default function AuthorizationForm(props) {

    return(
        <div className={styles.authorization}>
            <div className={styles.authHeader}>
                <Link to='/' className={styles.logo}><img src={Logo} alt="Movies" /></Link>
                <p className={styles.greetings}>{props.greeting}</p>
            </div>
            <form className={styles.form} onSubmit={props.onSubmit} noValidate>
                {props.children}
                <button type='submit' className={styles.submitBtn}>{props.button}</button>
                <p className={styles.reminder}>Уже зарегистрированы?<Link className={styles.link} to='/sign-in'>Войти</Link></p>
            </form>

        </div>
    )
}
