import { format, fromUnixTime } from 'date-fns'

export class ForeCast {
    weatherCode
    temperatureMin = {
        value: 0,
        unit: '°C',
    }

    temperatureMax = {
        value: 0,
        unit: '°C',
    }

    time = {
        value: 0,
        unit: 'unixtime',
    }

    windspeed = {
        value: 0,
        unit: 'mph',
    }

    visibilty = {
        value: 0,
        unit: 'm',
    }

    humidity = {
        value: 0,
        unit: '%',
    }

    airPresure = {
        value: 0,
        unit: 'hPa',
    }

    constructor({
        temperatureMin,
        temperatureMax,
        time,
        windspeed,
        visibilty,
        humidity,
    }) {
        this.temperatureMax = temperatureMax
        this.temperatureMin = temperatureMin
        this.time = time
        this.windspeed = windspeed
        this.humidity = humidity
        this.visibilty = visibilty
    }

    getCurrentDayFormat() {
        const date = fromUnixTime(this.time.value)
        return `${format(date, 'E')}. ${format(date, 'd')} ${format(
            date,
            'LLL'
        )}`
    }

    static getTodayIndex(forecasts = []) {
        const today = new Date()
        const todayForeCastIndex = forecasts.findIndex((foreCast) => {
            const foreCastDate = fromUnixTime(foreCast.time.value)
            return today.getDate() - foreCastDate.getDate() === 0
        })
        return todayForeCastIndex
    }

    isTomorrow(actualForcast) {
        const currentForcastDate = fromUnixTime(this.time.value)
        const actualForcastDate = fromUnixTime(actualForcast)
        return currentForcastDate.getDate() - actualForcastDate.getDate() === 1
    }
}