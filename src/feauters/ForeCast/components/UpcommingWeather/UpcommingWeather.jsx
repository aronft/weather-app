import './_upcommingWeather.scss'

import React from 'react'

import { WeatherCard } from '../WeatherCard/WeatherCard'

export const UpcommingWeather = ({ wetaherList = [] }) => {
    return (
        <div className="weather-list">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    )
}
