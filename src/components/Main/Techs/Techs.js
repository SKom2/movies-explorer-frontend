import styles from './Techs.module.css'
import Heading from "../../Common/Heading/Heading";

export default function Techs(){
    return (
        <div id="technologies" className={styles.techs}>
            <Heading title="Технологии"/>
            <h3 className={styles.title}>7 технологий</h3>
            <p className={styles.text}>На курсе веб-разработки мы освоили технологии, которые применили в<br/>дипломном проекте.</p>
            <div className={styles.grid}>
                <div className={styles.gridItem}>HTML</div>
                <div className={styles.gridItem}>CSS</div>
                <div className={styles.gridItem}>JS</div>
                <div className={styles.gridItem}>React</div>
                <div className={styles.gridItem}>Git</div>
                <div className={styles.gridItem}>Express.js</div>
                <div className={styles.gridItem}>mongoDB</div>
            </div>
        </div>
    )
}
