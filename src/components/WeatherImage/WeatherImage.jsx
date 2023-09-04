import React from 'react'

import shower from '../../assets/images/Shower.png'
import styles from './_weather-image.module.scss'

export const WeatherImage = ({ images = ['Shower'], className = '' }) => {
    return (
        <div
            className={`${styles['weather-image-container']} ${styles[className]}`}
        >
            <img src={shower} alt="" />
        </div>
    )
}
