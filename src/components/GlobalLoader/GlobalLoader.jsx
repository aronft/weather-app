import React from 'react'

import { Loader } from '../Loader'
import styles from './_global-loader.module.scss'

export const GlobalLoader = () => {
    return (
        <div className={styles['global-loader']}>
            <Loader className={styles['global-loader__size']} />
        </div>
    )
}
