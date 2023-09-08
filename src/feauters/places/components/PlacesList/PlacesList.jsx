import React from 'react'

import { PlaceItem } from '../PlaceItem/PlaceItem'
import styles from './_places-list.module.scss'

export const PlacesList = ({ list = [], setPlace }) => {
    return (
        <div className={styles['places-list']} data-testid="places-list">
            {list.map((item) => (
                <PlaceItem
                    key={item.id}
                    countryCode={item.countryCode}
                    name={item.name}
                    onClick={() => setPlace(item)}
                />
            ))}
        </div>
    )
}
