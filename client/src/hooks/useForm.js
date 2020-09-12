// write your custom hook here to control your checkout form
import { useState } from 'react';
import { initialValue } from '../components/CheckoutForm';
import {useLocalStorage} from './useLocalStorage';

export const useForm = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    return [values, setValues];

    
}