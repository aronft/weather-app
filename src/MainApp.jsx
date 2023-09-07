// import './sass/index.scss'

import '@/sass/index.scss'

import React, { useEffect } from 'react'

import { ForeCast } from '@/feauters/ForeCast/ForeCast'

import styles from './_main-app.module.scss'
import { GlobalLoader } from './components'
import { useForeCast } from './feauters/ForeCast/hooks'
import { PlacesSidebar } from './feauters/places/components/PlacesSidebar/PlacesSidebar'
import { usePlaces } from './feauters/places/hooks/usePlaces'
import { CurrentWeather } from './feauters/weather/components/CurrentWeather/CurrentWeather'
export const MainApp = () => {
    const { getForecast, isLoading } = useForeCast()
    const { getPlaceByLocation } = usePlaces()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            getForecast({ latitude, longitude })
            getPlaceByLocation({ latitude, longitude })
        })
    }, [])
    return (
        <main className={styles['main-app']}>
            {isLoading && <GlobalLoader />}
            <PlacesSidebar />
            <CurrentWeather />
            <ForeCast />
        </main>
    )
}
