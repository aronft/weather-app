import React from 'react'

import { Card } from '../../../../components/Card/Card'
import { WeatherImage } from '../../../../components/WeatherImage/WeatherImage'
import styles from './_weather-card.module.scss'

export const WeatherCard = ({ title }) => {
    const footer = (
        <>
            <p className={'text-s'}>16°C</p>
            <p className={'text-s'}>16°C</p>
        </>
    )
    return (
        <Card
            title={'Tomorrow'}
            footer={footer}
            className={styles['weather-card']}
        >
            <WeatherImage className={'weather-image-container--s'} />
        </Card>
    )
}
