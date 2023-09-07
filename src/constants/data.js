import { ForeCast } from '../feauters/ForeCast/models/foreCast'

const FORE_CAST_DATA_BASE = [
    {
        id: '594ff0fd-cd54-473b-9547-4089c2867003',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 41,
            unit: 'C',
        },
        temperatureMax: {
            value: 33,
            unit: 'C',
        },
        dateTime: '2023-09-07',
        windspeed: {
            value: 21.7,
            unit: 'kph',
        },
        visibilty: {
            value: 14.5,
            unit: 'km',
        },
        humidity: {
            value: 64.7,
            unit: '%',
        },
        airPresure: {
            value: 1013.6,
            unit: 'mb',
        },
    },
    {
        id: 'fa9a9059-b6e8-4700-a593-524f8ad028f6',
        weatherCode: 'clear-day',
        temperatureMin: {
            value: 42,
            unit: 'C',
        },
        temperatureMax: {
            value: 33,
            unit: 'C',
        },
        dateTime: '2023-09-08',
        windspeed: {
            value: 25.3,
            unit: 'kph',
        },
        visibilty: {
            value: 15,
            unit: 'km',
        },
        humidity: {
            value: 47.9,
            unit: '%',
        },
        airPresure: {
            value: 1005.3,
            unit: 'mb',
        },
    },
    {
        id: 'd8acce7f-a185-4dd2-b971-b4858f7990c4',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 35,
            unit: 'C',
        },
        temperatureMax: {
            value: 22,
            unit: 'C',
        },
        dateTime: '2023-09-09',
        windspeed: {
            value: 25.5,
            unit: 'kph',
        },
        visibilty: {
            value: 11.6,
            unit: 'km',
        },
        humidity: {
            value: 59,
            unit: '%',
        },
        airPresure: {
            value: 997.7,
            unit: 'mb',
        },
    },
    {
        id: 'd185bc44-de48-4c47-979f-a016a20a2bbe',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 32,
            unit: 'C',
        },
        temperatureMax: {
            value: 23,
            unit: 'C',
        },
        dateTime: '2023-09-10',
        windspeed: {
            value: 24.8,
            unit: 'kph',
        },
        visibilty: {
            value: 10.9,
            unit: 'km',
        },
        humidity: {
            value: 67.5,
            unit: '%',
        },
        airPresure: {
            value: 1005.2,
            unit: 'mb',
        },
    },
    {
        id: '66387753-1885-4a47-a17a-6db352c7630e',
        weatherCode: 'partly-cloudy-day',
        temperatureMin: {
            value: 35,
            unit: 'C',
        },
        temperatureMax: {
            value: 31,
            unit: 'C',
        },
        dateTime: '2023-09-11',
        windspeed: {
            value: 17,
            unit: 'kph',
        },
        visibilty: {
            value: 15,
            unit: 'km',
        },
        humidity: {
            value: 48.3,
            unit: '%',
        },
        airPresure: {
            value: 1009.2,
            unit: 'mb',
        },
    },
    {
        id: 'f2e78180-2f36-41c7-815c-9bb5d54a3ef7',
        weatherCode: 'clear-day',
        temperatureMin: {
            value: 38,
            unit: 'C',
        },
        temperatureMax: {
            value: 33,
            unit: 'C',
        },
        dateTime: '2023-09-12',
        windspeed: {
            value: 17,
            unit: 'kph',
        },
        visibilty: {
            value: 15,
            unit: 'km',
        },
        humidity: {
            value: 35.7,
            unit: '%',
        },
        airPresure: {
            value: 1002,
            unit: 'mb',
        },
    },
]

export const FORE_CAST_DATA = FORE_CAST_DATA_BASE.map((item) => {
    const forecCast = new ForeCast(item)
    return forecCast
})
