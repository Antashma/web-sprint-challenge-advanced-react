// write your custom hook here to control your checkout form
import { useState } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useForm = () => {
    const [values, setValues] = useLocalStorage();

/*     const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    } */
    return [value, setValues];
}