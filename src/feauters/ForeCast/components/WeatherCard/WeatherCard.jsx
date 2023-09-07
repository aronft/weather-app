import React from 'react'

import { Card } from '../../../../components/Card/Card'
import { WeatherImage } from '../../../../components/WeatherImage/WeatherImage'
import { icons } from '../../../../constants'
import styles from './_weather-card.module.scss'

export const WeatherCard = ({ min, max, code, title }) => {
    const footer = (
        <>
            <p className={'text-s'}>
                {max.value} {max.unit}
            </p>
            <p className={'text-s'}>
                {min.value} {min.unit}
            </p>
        </>
    )

    const image = icons[code]
    return (
        <Card title={title} footer={footer} className={styles['weather-card']}>
            <WeatherImage
                className={'weather-image-container--s'}
                image={image}
            />
        </Card>
    )
}
