import Input from "../Input/Input";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import {useForm} from "../../../hooks/useForm";
import styles from './Register.module.css'

export default function Register(){
    const {values, handleChange, errors, isValid} = useForm({
        name: '',
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values)
    }

    return(
        <AuthorizationForm
            greeting='Добро пожаловать!'
            button='Зарегистрироваться'
            onSubmit={handleSubmit}
            name="registration"
            isvalid={isValid}
        >
            <Input
                type="text"
                title='Имя'
                name="name"
                value={values.name || ''}
                onChange={handleChange}
            />
            {errors.name ? (<span className={styles.error}>{errors.name}</span>) : (<span className={styles.errorNotVisible}></span>)}
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
