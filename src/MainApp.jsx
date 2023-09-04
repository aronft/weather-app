import './sass/index.scss'
import './_main-app.scss'

import React, { useEffect } from 'react'

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
        <div className={'main-app'}>
            <CurrentWeather />
            <ForeCast />
        </div>
    )
}
