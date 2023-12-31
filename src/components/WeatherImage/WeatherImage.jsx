import React from 'react'

import styles from './_weather-image.module.scss'

export const WeatherImage = ({ image, className = '', alt }) => {
    return (
        <div
            className={`${styles['weather-image-container']} ${styles[className]}`}
        >
            <img src={image} alt={alt} />
        </div>
    )
}
