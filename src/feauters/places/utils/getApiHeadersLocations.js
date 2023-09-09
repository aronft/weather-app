import { getVariables } from '../../../utils'

export const getApiHeadersLocations = () => {
    const variables = getVariables()
    return {
        'X-RapidAPI-Key': variables.RAPID_API_KEY,
        'X-RapidAPI-Host': variables.RAPID_API_HOST,
    }
}
