export const foreCastSlice = (set) => ({
    forecasts: [],
    forecastToday: {},
    setForecasts: (forecasts) => set({ forecasts }),
    setForecastToday: (forecastToday) => set({ forecastToday }),
})
