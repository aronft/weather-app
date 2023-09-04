import './_current-weather.scss'

import React from 'react'

import { Button } from '../../../../components/Button/Button'
import { WeatherImage } from '../../../../components/WeatherImage/WeatherImage'

export const CurrentWeather = () => {
    return (
        <section className={'current-weather'}>
            <header className="current-weather__header">
                <Button className={'btn btn-gray text-gray-light'}>
                    Search for places
                </Button>
                <Button className={'btn btn--icon btn-gray text-gray-light'}>
                    <i className="fa-solid fa-location-crosshairs"></i>
                </Button>
            </header>

            <div className="current-weather__body">
                <WeatherImage />
                <p className={'text-xl'}>
                    15<span className={'text-l text-gray'}>°C</span>
                </p>
                <p className={'text-gray text-l wgh-600'}>shower</p>
            </div>

            <footer className="current-weather__footer">
                <p className={'text-m text-gray-dark '}>
                    Today <span className="period"></span> Fri, 5 Jun
                </p>
                <div className="current-weather__location text-gray-dark wgh-600">
                    <i className="fa-solid fa-location-dot"></i>
                    Helsinki
                </div>
            </footer>
        </section>
    )
}
