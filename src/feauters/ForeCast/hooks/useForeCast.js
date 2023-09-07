import { add, format } from 'date-fns'
import { useEffect } from 'react'

import { Metrics } from '../../../constants'
import { usePlacesStore } from '../../places/store/placesStore'
import { getForecastApi } from '../api/getForecastApi'
import { ForeCast } from '../models/foreCast'
import { useForeCastStore } from '../store/foreCastStore'

export const useForeCast = (actualPlace) => {
    const forecasts = useForeCastStore((state) => state.forecasts)
    const forecastToday = useForeCastStore((state) => state.forecastToday)
    const setForecasts = useForeCastStore((state) => state.setForecasts)
    const setForecastToday = useForeCastStore((state) => state.setForecastToday)

    const getForecast = async ({ latitude, longitude }) => {
        const startDate = new Date()
        const endDate = add(startDate, { days: 5 })

        const startDateFormatted = format(startDate, 'yyyy-MM-dd')
        const endDateFormatted = format(endDate, 'yyyy-MM-dd')
        const data = await getForecastApi({
            latitude,
            longitude,
            startDate: startDateFormatted,
            endDate: endDateFormatted,
            unitGroup: Metrics.uk,
        })

        const forecastTodayIndex = ForeCast.getTodayIndex(data)
        setForecasts(data)
        setForecastToday(data[forecastTodayIndex])
        return data
    }

    useEffect(() => {
        console.log(actualPlace)
        if (actualPlace === null || actualPlace === undefined) {
            return
        }
        getForecast({
            latitude: actualPlace.latitude,
            longitude: actualPlace.longitude,
        }).then()
    }, [actualPlace])

    return {
        getForecast,
        forecasts,
        forecastToday,
    }
}
