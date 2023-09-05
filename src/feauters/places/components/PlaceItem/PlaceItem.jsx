import React from 'react'

import styles from './_place-item.module.scss'
export const PlaceItem = ({ name, countryCode, onClick }) => {
    return (
        <div className={styles['place-item']} onClick={onClick}>
            <p>
                {name}, {countryCode}
            </p>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    )
}
