import {useState, useCallback} from 'react';

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const input = evt.target;
        const name = input.name;
        const value = input.value;
        setValues({...values, [name]: value});
        const newErrors = { ...errors };
        if (!value) {
            newErrors[name] = 'Нужно ввести ключевое слово';
        } else {
            newErrors[name] = '';
        }
        setErrors(newErrors);
        setIsValid(input.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        values,
        errors,
        isValid,
        handleChange,
        setValues,
        setIsValid,
        setErrors,
        resetForm
    };
}
