import { getVariables } from '../../../utils/getVariables'
import { ForeCast } from '../models/foreCast'

export const getForecast = async ({ longitud, latitud }) => {
    const variables = getVariables()
    const forecasts = []
    const data = await fetch(
        `${variables.API_OPEN_METEO}/forecast?latitude=${latitud}&longitude=${longitud}&hourly=relativehumidity_2m,visibility,pressure_msl&&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York&format=json&windspeed_unit=mph`
    ).then((resp) => resp.json())

    for (let i = 0; i < data.daily.time.length; i++) {
        const forecast = new ForeCast({ id: crypto.randomUUID() })

        forecast.time = {
            value: data.daily.time[i],
            unit: data.daily_units.time,
        }
        forecast.temperatureMax = {
            value: data.daily.temperature_2m_max[i],
            unit: data.daily_units.temperature_2m_max,
        }
        forecast.temperatureMin = {
            value: data.daily.temperature_2m_min[i],
            unit: data.daily_units.temperature_2m_min,
        }

        forecast.weatherCode = data.daily.weathercode[i]
        forecasts.push(forecast)
    }

    const forecastTodayIndex = ForeCast.getTodayIndex(forecasts)

    if (forecastTodayIndex !== -1) {
        forecasts[forecastTodayIndex].windspeed = {
            value: data.current_weather.windspeed,
            unit: 'mph',
        }

        const indexTimeCurrentDay = data.hourly.time.findIndex(
            (time) => time === forecasts[forecastTodayIndex].time.value
        )
        if (indexTimeCurrentDay !== -1) {
            forecasts[forecastTodayIndex].humidity = {
                value: data.hourly.relativehumidity_2m[indexTimeCurrentDay],
                unit: data.hourly_units.relativehumidity_2m,
            }
            forecasts[forecastTodayIndex].visibilty = {
                value: data.hourly.visibility[indexTimeCurrentDay],
                unit: data.hourly_units.visibility,
            }

            forecasts[forecastTodayIndex].airPresure = {
                value: data.hourly.pressure_msl[indexTimeCurrentDay],
                unit: data.hourly_units.pressure_msl,
            }
        }
    }

    console.log(forecasts)
    return forecasts
}
