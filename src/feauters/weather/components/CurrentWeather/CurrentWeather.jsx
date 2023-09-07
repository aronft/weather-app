import React from 'react'

import { Button } from '../../../../components/Button/Button'
import { WeatherImage } from '../../../../components/WeatherImage/WeatherImage'
import { icons } from '../../../../constants'
import { useForeCast } from '../../../ForeCast/hooks/useForeCast'
import { getCurrentDayFormat } from '../../../ForeCast/utils/getFormatDate'
import { usePlacesStore } from '../../../places/store/placesStore'
import styles from './_current-weather.module.scss'

export const CurrentWeather = () => {
    const { forecastToday, getForecast } = useForeCast()
    const toggleSidbar = usePlacesStore((state) => state.toggleSidbar)
    const actualPlace = usePlacesStore((state) => state.actualPlace)

    const getUbication = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            getForecast({ latitude, longitude })
        })
    }
    return (
        <section className={styles['current-weather']}>
            <header className={styles['current-weather__header']}>
                <Button
                    className={'btn btn-gray-darken text-gray-light'}
                    onClick={toggleSidbar}
                >
                    Search for places
                </Button>
                <Button
                    className={'btn btn--icon btn-gray-darken text-gray-light'}
                    onClick={getUbication}
                >
                    <i className="fa-solid fa-location-crosshairs"></i>
                </Button>
            </header>

            <div className={styles['current-weather__body']}>
                <WeatherImage image={icons[forecastToday.weatherCode]} />
                <p className={'text-xl'}>
                    {forecastToday?.temp?.value}
                    <span className={'text-l text-gray'}>
                        °{forecastToday?.temp?.unit}
                    </span>
                </p>
                <p
                    className={`text-gray text-l wgh-600 ${styles['current-weather__conditions']}`}
                >
                    {forecastToday?.conditions}
                </p>
            </div>

            <footer className={styles['current-weather__footer']}>
                <p className={'text-m text-gray-dark '}>
                    Today <span className={styles.period}></span>{' '}
                    {forecastToday?.dateTime &&
                        getCurrentDayFormat(forecastToday.dateTime)}
                </p>
                <div
                    className={`${styles['current-weather__location']} ${styles['text-gray-dark']} ${styles['wgh-600']}`}
                >
                    <i className="fa-solid fa-location-dot" color=""></i>
                    {actualPlace?.city}
                </div>
            </footer>
        </section>
    )
}
