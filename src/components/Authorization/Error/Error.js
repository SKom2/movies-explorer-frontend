import styles from './Error.module.css'
import {Link} from "react-router-dom";

export default function Error() {
    return(
        <div className={styles.error}>
            <p className={styles.errorStatus}>404</p>
            <p className={styles.errorText}>Страница не найдена</p>
            <Link className={styles.back} to='/signin'>{'Назад'}</Link>
        </div>
    )
}
