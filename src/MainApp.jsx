import './sass/index.scss'

import React, { useEffect } from 'react'

import styles from './_main-app.module.scss'
import { ForeCast } from './feauters/ForeCast/ForeCast'
import { CurrentWeather } from './feauters/weather/components/CurrentWeather/CurrentWeather'
export const MainApp = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // const { latitude, longitude } = position.coords
            // getWeather(latitude, longitude).then(data => console.log(data))
        })
    }, [])
    return (
        <div className={styles['main-app']}>
            <CurrentWeather />
            <ForeCast />
        </div>
    )
}
