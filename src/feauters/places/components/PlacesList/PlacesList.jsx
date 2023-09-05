import React from 'react'

import { PlaceItem } from '../PlaceItem/PlaceItem'
import styles from './_places-list.module.scss'

export const PlacesList = ({ list = [] }) => {
    return (
        <div className={styles['places-list']}>
            {list.map((item) => (
                <PlaceItem
                    key={item.id}
                    countryCode={item.countryCode}
                    name={item.name}
                />
            ))}
        </div>
    )
}
