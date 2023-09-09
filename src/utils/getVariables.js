const config = import.meta.env

console.log(config)
export const getVariables = () => {
    return {
        API_GEODB_CITIES: config.VITE_API_GEODB_CITIES,
        RAPID_API_KEY: config.VITE_RAPID_API_KEY,
        RAPID_API_HOST: config.VITE_RAPID_API_HOST,

        API_OPEN_METEO: config.VITE_API_OPEN_METEO,
        OPEN_METEO_API_KEY: config.VITE_OPEN_METEO_API_KEY,
    }
}
