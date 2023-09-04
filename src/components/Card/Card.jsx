import React from 'react'

import styles from './_card.module.scss'

export const Card = ({ children, title, footer }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__title}>
                <p className={'text-s'}>{title}</p>
            </div>
            <div className={styles.card__body}>{children}</div>
            <div className={styles.card__footer}>{footer}</div>
        </div>
    )
}
