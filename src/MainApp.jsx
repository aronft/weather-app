import './sass/index.scss'
import './_main-app.scss'

import React, { useEffect } from 'react'

import { CurrentWeather } from './components/CurrentWeather/CurrentWeather'
import { ForeCast } from './components/ForeCast/ForeCast'
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
