import { Metrics, MetricsData } from '../../../constants/metrics'
import { getVariables } from '../../../utils/getVariables'
import { ForeCast } from '../models/foreCast'

export const getForecastApi = async ({
    longitude,
    latitude,
    startDate,
    endDate,
    unitGroup = Metrics.uk,
}) => {
    const variables = getVariables()
    const forecasts = []
    const data = await fetch(
        `${variables.API_OPEN_METEO}/${longitude},${latitude}/${startDate}/${endDate}?key=${variables.OPEN_METEO_API_KEY}&iconSet=icons2&unitGroup=${unitGroup}`
    ).then((res) => res.json())

    for (let i = 0; i < data.days.length; i++) {
        const forecast = new ForeCast({})
        const item = data.days[i]

        forecast.dateTime = item.datetime

        forecast.temperatureMax = {
            value: Math.abs(item.tempmax),
            unit: MetricsData.temperature[unitGroup],
        }
        forecast.temperatureMin = {
            value: Math.abs(item.tempmin),
            unit: MetricsData.temperature[unitGroup],
        }

        forecast.windspeed = {
            value: item.windspeed,
            unit: MetricsData.windspeed[unitGroup],
        }

        forecast.weatherCode = item.icon

        forecast.humidity = {
            value: item.humidity,
            unit: '%',
        }

        forecast.visibilty = {
            value: item.visibility,
            unit: MetricsData.visibility[unitGroup],
        }

        forecast.airPresure = {
            value: item.pressure,
            unit: 'mb',
        }

        forecasts.push(forecast)
    }

    forecasts[0].temp = {
        value: Math.abs(data.currentConditions.temp),
        unit: MetricsData.temperature[unitGroup],
    }
    forecasts[0].weatherCode = data.currentConditions.icon
    forecasts[0].conditions = data.currentConditions.conditions

    return forecasts
}
