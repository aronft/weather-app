import React from 'react'

import { ForeCast } from '../../models/foreCast'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import styles from './_upcommingWeather.module.scss'

export const UpcommingWeather = ({ wetaherList = [] }) => {
    return (
        <div className={styles['weather-list']}>
            {wetaherList.map((weather) => (
                <WeatherCard
                    key={weather.id}
                    title={
                        ForeCast.isTomorrow(weather.time.value)
                            ? 'Tomorrow'
                            : weather.getCurrentDayFormat()
                    }
                    max={weather.temperatureMax}
                    min={weather.temperatureMin}
                />
            ))}
        </div>
    )
}
