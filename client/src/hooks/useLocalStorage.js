import {useEffect, useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    //when key and value update update the item key and value in local storage
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}