import styles from './AboutProject.module.css';

export default function AboutProject() {


    return(
        <div id="aboutproject" className={styles.aboutProject}>
            <h2 className={styles.aboutProjectTitle}>О проекте</h2>
            <div className={styles.line}></div>
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
        </div>
    )
}
