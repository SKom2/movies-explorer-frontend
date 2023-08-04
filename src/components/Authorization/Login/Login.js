import styles from '../Register/Register.module.css'
import {useForm} from "../../../hooks/useForm";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Input from "../Input/Input";

export default function Login() {
    const {values, handleChange, errors, isValid} = useForm({
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values)
    }

    return(
        <AuthorizationForm
            greeting='Рады видеть!'
            button='Войти'
            onSubmit={handleSubmit}
            name="login"
            isvalid={isValid}
            path='/signup'
            reminder='Ещё не зарегистрированы?'
            reminderLink='Регистрация'
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
