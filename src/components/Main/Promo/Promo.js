import styles from "./Promo.module.css";
import NavTab from "../NavTab/NavTab";

export default function Promo() {
    return(
        <div className={styles.promo}>
            <h1 className={styles.title}>&nbsp;Учебный проект студента&nbsp;<br/>факультета <br/>Веб-разработки.</h1>
            <NavTab />
        </div>
    )
}
