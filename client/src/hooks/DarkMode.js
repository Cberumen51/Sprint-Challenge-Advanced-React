import {useEffect} from 'react'
<<<<<<< HEAD
import {LocalStorage} from './LocalStoarage'

export const Darkmode = (value) => {
=======
import {LocalStorage} from './LocalStorage'

export const useDarkmode = (value) => {
>>>>>>> 547343374cf2ea2586aee8d2348dec41d09eaf6c

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