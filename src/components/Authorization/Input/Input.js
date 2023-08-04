import styles from './Input.module.css'

export default function Input(props) {
    return(
        <div className={styles.inputContainer}>
            <label className={styles.label}>{props.title}</label>
            <input
                className={styles.input}
                type={props.type}
                name={props.name}
                minLength={props.minLength}
                maxLength={props.maxLength}
                value={props.value || ''}
                onChange={props.onChange}
                required
            />
        </div>
    )
}
