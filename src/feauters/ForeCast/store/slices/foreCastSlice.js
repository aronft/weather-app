import { FORE_CAST_DATA } from '../../../../constants'

export const foreCastSlice = (set) => ({
    forecasts: FORE_CAST_DATA,
    forecastToday: FORE_CAST_DATA[0],
    setForecasts: (forecasts) => set({ forecasts }),
    setForecastToday: (forecastToday) => set({ forecastToday }),
})
