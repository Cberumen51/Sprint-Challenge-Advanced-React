import {useState} from 'react'

export  const LocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
    
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        console.log('setValue running')
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));

    }

    return [storedValue, setValue];
}
