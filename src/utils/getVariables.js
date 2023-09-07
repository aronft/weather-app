export const getVariables = () => {
    return {
        API_GEODB_CITIES: process.env.API_GEODB_CITIES,
        RAPID_API_KEY: process.env.RAPID_API_KEY,
        RAPID_API_HOST: process.env.RAPID_API_HOST,

        API_OPEN_METEO: process.env.API_OPEN_METEO,
        OPEN_METEO_API_KEY: process.env.OPEN_METEO_API_KEY,
    }
}
