import { add, format } from 'date-fns'

import { ForeCast } from '../feauters/ForeCast/models/foreCast'

export const FORE_CAST_TODAY = () => {
    const dateTime = format(new Date(), 'yyy-MM-dd')
    return {
        id: crypto.randomUUID(),
        dateTime,
        weatherCode: 'unknown',
        conditions: 'Partly cloudy',
        temp: {
            value: 0,
            unit: 'C',
        },
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 20,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    }
}

const FORE_CAST_DATA_BASE = [
    FORE_CAST_TODAY(),
    {
        id: 'fa9a9059-b6e8-4700-a593-524f8ad028f6',
        weatherCode: 'clear-day',
        temperatureMin: {
            value: 0,
            unit: 'C',
        },
        temperatureMax: {
            value: 0,
            unit: 'C',
        },
        dateTime: '2023-09-08',
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 0,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    },
    {
        id: 'd8acce7f-a185-4dd2-b971-b4858f7990c4',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 0,
            unit: 'C',
        },
        temperatureMax: {
            value: 0,
            unit: 'C',
        },
        dateTime: '2023-09-09',
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 0,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    },
    {
        id: 'd185bc44-de48-4c47-979f-a016a20a2bbe',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 0,
            unit: 'C',
        },
        temperatureMax: {
            value: 0,
            unit: 'C',
        },
        dateTime: '2023-09-10',
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 0,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    },
    {
        id: '66387753-1885-4a47-a17a-6db352c7630e',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 0,
            unit: 'C',
        },
        temperatureMax: {
            value: 0,
            unit: 'C',
        },
        dateTime: '2023-09-11',
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 0,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    },
    {
        id: 'f2e78180-2f36-41c7-815c-9bb5d54a3ef7',
        weatherCode: 'clear-day',
        temperatureMin: {
            value: 0,
            unit: 'C',
        },
        temperatureMax: {
            value: 0,
            unit: 'C',
        },
        dateTime: '2023-09-12',
        windspeed: {
            value: 0,
            unit: 'kph',
        },
        visibilty: {
            value: 0,
            unit: 'km',
        },
        humidity: {
            value: 0,
            unit: '%',
        },
        airPresure: {
            value: 0,
            unit: 'mb',
        },
    },
]

export const FORE_CAST_DATA = FORE_CAST_DATA_BASE.map((item, index) => {
    const todayDate = new Date()
    item.dateTime = format(add(todayDate, { days: index }), 'yyy-MM-dd')
    const forecCast = new ForeCast(item)
    return forecCast
})
