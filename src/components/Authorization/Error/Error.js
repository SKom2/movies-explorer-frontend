import styles from './Error.module.css'
import {Link, useNavigate} from "react-router-dom";

export default function Error() {
    const navigate = useNavigate()
    return(
        <div className={styles.error}>
            <p className={styles.errorStatus}>404</p>
            <p className={styles.errorText}>Страница не найдена</p>
            <Link className={styles.back} onClick={() => navigate(-1)}>{'Назад'}</Link>
        </div>
    )
}
