import styles from './Main.module.css'
import Promo from "./Promo/Promo";

export default function Main() {
    return (
        <section className={styles.main}>
            <Promo />
        </section>
    )
}
