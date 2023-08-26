import styles from '../Register/Register.module.css'
import {useForm} from "../../../hooks/useForm";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Input from "../Input/Input";
import {useEffect} from "react";
import {isValidEmail} from "../../../utils/isValidEmail";

export default function Login({login, attentionMessage, setAttentionMessage, isSubmitting}) {
    const {values, handleChange, errors, isValid, setIsValid} = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        const emailValid = isValidEmail(values.email);
        setIsValid(emailValid);
    }, [values.email, setIsValid]);

    function handleSubmit(e) {
        e.preventDefault();
        login(values, isValid)
    }

    return(
        <AuthorizationForm
            greeting='Рады видеть!'
            button='Войти'
            onSubmit={handleSubmit}
            name="login"
            isValid={isValid}
            setIsValid={setIsValid}
            path='/signup'
            reminder='Ещё не зарегистрированы?'
            reminderLink='Регистрация'
            attentionMessage={attentionMessage}
            setAttentionMessage={setAttentionMessage}
            isSubmitting={isSubmitting}
        >
            <Input
                type="email"
                title='E-mail'
                name="email"
                value={values.email || ''}
                onChange={handleChange}
            />
            {errors.email ? (<span className={styles.error}>{errors.email}</span>) : (<span className={styles.errorNotVisible}></span>)}
            <Input
                type="password"
                title='Пароль'
                name="password"
                value={values.password || ''}
                onChange={handleChange}
                minLength="8"
                maxLength="40"
            />
            {errors.password ? (<span className={styles.lastError}>{errors.password}</span>) : (<span className={styles.errorNotVisible}></span>)}
        </AuthorizationForm>
    )
}
