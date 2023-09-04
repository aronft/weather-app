import React from 'react'

import { Button } from '../../components/Button/Button'
import styles from './_forecast.module.scss'
import { CurrentHighlights } from './components/CurrentHighlights/CurrentHighlights'
import { UpcommingWeather } from './components/UpcommingWeather/UpcommingWeather'

export const ForeCast = () => {
    return (
        <section className={styles.forecast}>
            <header className={styles.forecast__header}>
                <div className={styles.forecast__options}>
                    <Button
                        className={
                            'btn btn--icon btn-gray-light text-primary-dark wgh-700'
                        }
                    >
                        °C
                    </Button>
                    <Button
                        className={'btn btn--icon btn-primary-light wgh-700'}
                    >
                        °F
                    </Button>
                </div>
            </header>

            <div className={styles.forecast__body}>
                <UpcommingWeather wetaherList={[]} />
                <h2 className={'text-m'}>Todays Highlights</h2>
                <CurrentHighlights />
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
