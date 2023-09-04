import React from 'react'

import { WeatherCard } from '../WeatherCard/WeatherCard'
import styles from './_upcommingWeather.module.scss'

export const UpcommingWeather = ({ wetaherList = [] }) => {
    return (
        <div className={styles['weather-list']}>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    )
}
