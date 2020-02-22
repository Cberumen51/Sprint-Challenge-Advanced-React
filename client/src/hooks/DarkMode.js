import {useEffect} from 'react'
import {LocalStorage} from './LocalStorage'

export const useDarkmode = (value) => {

    const [values, setValues] = LocalStorage('dark',value)

    useEffect(() => {
        if ( values === true) {
            const body = document.querySelector('body')
            body.classList.add('dark-mode')
           }

            else if (values === false)
            {
              const body = document.querySelector('body')
              body.classList.remove('dark-mode')
            }

    }, [values]);

    return [values, setValues];
}