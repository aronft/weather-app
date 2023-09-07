import React from 'react'

import styles from './_loader.module.scss'

const colors = {
    secondary: 'secondary',
}

export const Loader = ({ color = 'secondary', className }) => {
    return (
        <span
            className={`${styles.loader} ${className} ${
                styles[`loader--${colors[color]}`]
            }`}
        ></span>
    )
}
