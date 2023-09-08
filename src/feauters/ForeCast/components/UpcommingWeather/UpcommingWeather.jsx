import React from 'react'

import { WeatherCard } from '../WeatherCard/WeatherCard'
import styles from './_upcommingWeather.module.scss'

export const UpcommingWeather = ({ wetaherList = [] }) => {
    return (
        <section
            className={styles['weather-list']}
            aria-label="upcomming-weather"
        >
            {wetaherList.map((weather) => (
                <WeatherCard
                    key={weather.id}
                    title={
                        weather.isTomorrow()
                            ? 'Tomorrow'
                            : weather.getCurrentDayFormat()
                    }
                    max={weather.temperatureMax}
                    min={weather.temperatureMin}
                    code={weather.weatherCode}
                />
            ))}
        </section>
    )
}
