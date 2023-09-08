import React from 'react'

import styles from './_bar.module.scss'

export const Bar = ({ value = 0 }) => {
    return (
        <div
            className={styles['bar-container']}
            style={{ '--percentage': `${value}%` }}
        >
            <span>0</span>
            <span>50</span>
            <span>100</span>
            <span>%</span>
            <div>
                <div className={styles.bar}></div>
            </div>
        </div>
    )
}
