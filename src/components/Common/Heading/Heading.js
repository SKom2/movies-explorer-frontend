import styles from './Heading.module.css'
export default function Heading(props) {
    return(
        <>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.line}></div>
        </>
    )
}
