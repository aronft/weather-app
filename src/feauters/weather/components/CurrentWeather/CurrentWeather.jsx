import React from 'react'

import { Button } from '../../../../components/Button/Button'
import { WeatherImage } from '../../../../components/WeatherImage/WeatherImage'
import styles from './_current-weather.module.scss'

export const CurrentWeather = () => {
    return (
        <section className={styles['current-weather']}>
            <header className={styles['current-weather__header']}>
                <Button className={'btn btn-gray text-gray-light'}>
                    Search for places
                </Button>
                <Button className={'btn btn--icon btn-gray text-gray-light'}>
                    <i className="fa-solid fa-location-crosshairs"></i>
                </Button>
            </header>

            <div className={styles['current-weather__body']}>
                <WeatherImage />
                <p className={'text-xl'}>
                    15<span className={'text-l text-gray'}>°C</span>
                </p>
                <p className={'text-gray text-l wgh-600'}>shower</p>
            </div>

            <footer className={styles['current-weather__footer']}>
                <p className={'text-m text-gray-dark '}>
                    Today <span className={styles.period}></span> Fri, 5 Jun
                </p>
                <div
                    className={`${styles['current-weather__location']} ${styles['text-gray-dark']} ${styles['wgh-600']}`}
                >
                    <i
                        className={`${styles['fa-solid']} ${styles['fa-location-dot']}`}
                    ></i>
                    Helsinki
                </div>
            </footer>
        </section>
    )
}
