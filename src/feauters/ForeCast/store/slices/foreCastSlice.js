import { FORE_CAST_DATA, FORE_CAST_TODAY } from '../../../../constants'

export const foreCastSlice = (set) => ({
    forecasts: FORE_CAST_DATA,
    forecastToday: FORE_CAST_TODAY(),
    isLoading: false,
    setForecasts: (forecasts) => set({ forecasts }),
    setForecastToday: (forecastToday) => set({ forecastToday }),
    startLoadnig: () => set(() => ({ isLoading: true })),
    endLoadnig: () => set(() => ({ isLoading: false })),
})
