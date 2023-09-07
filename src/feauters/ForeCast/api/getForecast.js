import { Metrics, MetricsData } from '../../../constants/metrics'
import { getVariables } from '../../../utils/getVariables'
import { ForeCast } from '../models/foreCast'

export const getForecast = async ({
    longitud,
    latitud,
    startDate,
    endDate,
    unitGroup = Metrics.uk,
}) => {
    const variables = getVariables()
    const forecasts = []
    const data = await fetch(
        `${variables.API_OPEN_METEO}/${longitud},${latitud}/${startDate}/${endDate}?key=${variables.OPEN_METEO_API_KEY}&iconSet=icons2&unitGroup=${unitGroup}`
    ).then((resp) => resp.json())

    for (let i = 0; i < data.days.length; i++) {
        const forecast = new ForeCast({})
        const item = data.days[i]

        forecast.dateTime = item.datetime

        forecast.temperatureMax = {
            value: Math.round(Math.abs(item.tempmax)),
            unit: MetricsData.temperature[unitGroup],
        }
        forecast.temperatureMin = {
            value: Math.round(Math.abs(item.tempmin)),
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

    forecasts[0].temp = data.currentConditions.temp
    forecasts[0].weatherCode = data.currentConditions.icon

    console.log(forecasts)
    return forecasts
}
