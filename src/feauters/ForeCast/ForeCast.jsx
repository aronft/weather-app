import React from 'react'

import { Button } from '../../components/Button/Button'
import { usePlaces } from '../places/hooks/usePlaces'
import styles from './_forecast.module.scss'
import { CurrentHighlights } from './components/CurrentHighlights/CurrentHighlights'
import { UpcommingWeather } from './components/UpcommingWeather/UpcommingWeather'
import { useForeCast } from './hooks'
import { ForeCast as ForeCastModel } from './models/foreCast'
export const ForeCast = () => {
    const { actualPlace } = usePlaces()
    const { forecasts, swapTemperatures, forecastToday } =
        useForeCast(actualPlace)
    const foreCastTodayIndex = ForeCastModel.getTodayIndex(forecasts)
    const forecatsWithoutInitialDates = [...forecasts]
    forecatsWithoutInitialDates.splice(0, foreCastTodayIndex + 1)
    return (
        <section className={styles.forecast}>
            <header className={styles.forecast__header}>
                <div className={styles.forecast__options}>
                    <Button
                        className={
                            'btn btn--icon btn-gray-light text-primary-dark wgh-700'
                        }
                        onClick={swapTemperatures}
                    >
                        °C
                    </Button>
                    <Button
                        className={'btn btn--icon btn-primary-light wgh-700'}
                        onClick={swapTemperatures}
                    >
                        °F
                    </Button>
                </div>
            </header>

            <div className={styles.forecast__body}>
                <UpcommingWeather wetaherList={forecatsWithoutInitialDates} />
                <h2 className={'text-m'}>Todays Highlights</h2>
                <CurrentHighlights forecast={forecastToday} />
            </div>
            <footer className={styles.forecast__footer}>
                <p className={'text-gray text-xs'}>
                    created by blazte - &nbsp;
                    <a
                        href="https://devchallenges.io/"
                        className={'text-gray-light'}
                    >
                        devChallenge.io
                    </a>
                </p>
            </footer>
        </section>
    )
}
