import styles from './AboutMe.module.css'
import Heading from "../../Common/Heading/Heading";

export default function AboutMe(){
    return(
        <div id="student" className={styles.aboutMe}>
            <Heading title="Студент"/>
            <div className={styles.flexBox}>
                <div className={styles.info}>
                    <h3 className={styles.title}>Виталий</h3>
                    <p className={styles.subTitle}>Фронтенд-разработчик, 30 лет</p>
                    <p className={styles.text}>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена<br />
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        <br />С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className={styles.link}>Github</a>
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}
