import { add, format } from 'date-fns'
import { useEffect } from 'react'

import { Metrics } from '../../../constants'
import { usePlaces } from '../../places/hooks/usePlaces'
import { getForecastApi } from '../api/getForecastApi'
import { ForeCast } from '../models/foreCast'
import { useForeCastStore } from '../store/foreCastStore'
import { celsiousFahrenheitSwapForeCast } from '../utils'

export const useForeCast = () => {
    const forecasts = useForeCastStore((state) => state.forecasts)
    const startLoadnig = useForeCastStore((state) => state.startLoadnig)
    const endLoadnig = useForeCastStore((state) => state.endLoadnig)
    const isLoading = useForeCastStore((state) => state.isLoading)
    const forecastToday = useForeCastStore((state) => state.forecastToday)
    const setForecasts = useForeCastStore((state) => state.setForecasts)
    const setForecastToday = useForeCastStore((state) => state.setForecastToday)
    const { setActualPlace } = usePlaces()

    const getForecast = async ({ latitude, longitude }) => {
        const startDate = new Date()
        const endDate = add(startDate, { days: 5 })

        const startDateFormatted = format(startDate, 'yyyy-MM-dd')
        const endDateFormatted = format(endDate, 'yyyy-MM-dd')
        startLoadnig()
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
        endLoadnig()
        return data
    }

    const setActualAndCall = (place) => {
        setActualPlace(place)
        getForecast({ latitude: place.latitude, longitude: place.longitude })
    }

    const swapTemperatures = () => {
        const data = celsiousFahrenheitSwapForeCast(forecasts)
        setForecasts(data)
        setForecastToday(data[ForeCast.getTodayIndex(data)])
    }

    return {
        getForecast,
        forecasts,
        forecastToday,
        isLoading,
        setActualAndCall,
        swapTemperatures,
    }
}
