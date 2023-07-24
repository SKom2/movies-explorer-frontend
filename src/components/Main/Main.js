import styles from './Main.module.css'
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";

export default function Main() {
    return (
        <section className={styles.main}>
            <Promo />
            <AboutProject />
        </section>
    )
}
