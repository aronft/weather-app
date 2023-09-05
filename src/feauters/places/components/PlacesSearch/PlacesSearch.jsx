import React from 'react'

import { Button } from '../../../../components/Button/Button'
import styles from './_places-search.module.scss'

export const PlacesSearch = () => {
    return (
        <div className={styles['places-search-container']}>
            <form className={styles['places-search__form']}>
                <div className={styles['search-input-container']}>
                    <input
                        type="text"
                        placeholder="search location"
                        className={styles['search-input']}
                    />
                    <i
                        className={`${styles['search-input__icon']} fa-solid fa-magnifying-glass`}
                    ></i>
                </div>
                <Button className={'btn btn-secondary text-gray-light'}>
                    Search{' '}
                </Button>
            </form>
        </div>
    )
}
