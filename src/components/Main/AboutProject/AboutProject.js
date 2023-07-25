import styles from './AboutProject.module.css';
import Heading from "../../Common/Heading/Heading";

export default function AboutProject() {

    return(
        <div id="aboutproject" className={styles.aboutProject}>
            <Heading title="О проекте"/>
            <div className={styles.grid}>
                <div className={styles.gridColumn}>
                    <h3 className={styles.gridTitle}>Дипломный проект включал 5 этапов</h3>
                    <p className={styles.gridText}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className={styles.gridColumn}>
                    <h3 className={styles.gridTitle}>На выполнение диплома ушло 5 недель</h3>
                    <p className={styles.gridText}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className={styles.duration}>
                <div className={styles.backEndDuration}>1 неделя</div>
                <div className={styles.frontEndDuration}>4 недели</div>
            </div>
            <div className={styles.subDuration}>
                <div className={styles.backEnd}>Back-end</div>
                <div className={styles.frontEnd}>Front-end</div>
            </div>
        </div>
    )
}
