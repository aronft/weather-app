import { format, fromUnixTime, parse } from 'date-fns'

export class ForeCast {
    id
    weatherCode
    temp
    conditions
    temperatureMin = {
        value: 0,
        unit: '°C',
    }

    temperatureMax = {
        value: 0,
        unit: '°C',
    }

    dateTime = '' // ISO 8601 YYYY-MM-DD

    time = {
        value: 0,
        unit: '',
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
        dateTime,
        weatherCode,
        temp,
        conditions,
    }) {
        this.id = crypto.randomUUID()
        this.temperatureMax = temperatureMax
        this.temperatureMin = temperatureMin
        this.time = time
        this.windspeed = windspeed
        this.humidity = humidity
        this.visibilty = visibilty
        this.dateTime = dateTime
        this.weatherCode = weatherCode
        this.temp = temp
        this.conditions = conditions
    }

    getCurrentDayFormat() {
        const date = parse(this.dateTime, 'yyyy-MM-dd', new Date())
        return `${format(date, 'E')}. ${format(date, 'd')} ${format(
            date,
            'LLL'
        )}`
    }

    static getTodayIndex(forecasts = []) {
        const today = new Date()
        const todayForeCastIndex = forecasts.findIndex((foreCast) => {
            const foreCastDate = parse(
                foreCast.dateTime,
                'yyyy-MM-dd',
                new Date()
            )
            return today.getDate() - foreCastDate.getDate() === 0
        })
        return todayForeCastIndex
    }

    isTomorrow() {
        const currentForcastDate = new Date()
        const actualForcastDate = parse(this.dateTime, 'yyyy-MM-dd', new Date())
        return actualForcastDate.getDate() - currentForcastDate.getDate() === 1
    }
}
