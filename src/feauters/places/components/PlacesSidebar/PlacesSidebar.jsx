import { add, format } from 'date-fns'
import React, { useEffect } from 'react'

import { Loader } from '../../../../components'
import { Button } from '../../../../components/Button/Button'
import { Metrics } from '../../../../constants/metrics'
import { getForecast } from '../../../ForeCast/api/getForecast'
import { ForeCast } from '../../../ForeCast/models/foreCast'
import { useForeCastStore } from '../../../ForeCast/store/foreCastStore'
import { usePlacesStore } from '../../store/placesStore'
import { PlacesList } from '../PlacesList/PlacesList'
import { PlacesSearch } from '../PlacesSearch/PlacesSearch'
import styles from './_places-sidebar.module.scss'

export const PlacesSidebar = () => {
    const toggleSidbar = usePlacesStore((state) => state.toggleSidbar)
    const isOpenSidebar = usePlacesStore((state) => state.isOpenSidebar)
    const places = usePlacesStore((state) => state.places)
    const setActualPlace = usePlacesStore((state) => state.setActualPlace)
    const isLoading = usePlacesStore((state) => state.isLoading)
    const actualPlace = usePlacesStore((state) => state.actualPlace)
    const setForecasts = useForeCastStore((state) => state.setForecasts)
    const setForecastToday = useForeCastStore((state) => state.setForecastToday)

    useEffect(() => {
        if (actualPlace === null) {
            return
        }

        const startDate = new Date()
        const endDate = add(startDate, { days: 5 })

        const startDateFormatted = format(startDate, 'yyyy-MM-dd')
        const endDateFormatted = format(endDate, 'yyyy-MM-dd')

        getForecast({
            latitud: -12.0432,
            longitud: -77.0282,
            startDate: startDateFormatted,
            endDate: endDateFormatted,
            unitGroup: Metrics.uk,
        }).then((data) => {
            const forecastTodayIndex = ForeCast.getTodayIndex(data)
            setForecasts(data)
            setForecastToday(data[forecastTodayIndex])
        })
    }, [actualPlace])

    return (
        <aside
            className={`${styles.sidebar} ${
                isOpenSidebar ? styles.active : ''
            } `}
        >
            <Button
                className={'btn btn--icon text-gray-light'}
                onClick={toggleSidbar}
            >
                <i className="fa-solid fa-xmark"></i>
            </Button>
            <PlacesSearch />

            {isLoading ? (
                <Loader className={styles['center-spinner']} />
            ) : (
                <PlacesList list={places} setPlace={setActualPlace} />
            )}
        </aside>
    )
}
