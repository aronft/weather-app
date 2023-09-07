import { getVariables } from '../../../utils'
import { getApiHeadersLocations } from '../utils/getApiHeadersLocations'

export const getPlaceByLocationApi = async ({ latitude, longitude }) => {
    const variables = getVariables()
    try {
        const responseData = await fetch(
            `${variables.API_GEODB_CITIES}/locations/${latitude}${longitude}/nearbyPlaces?radius=100&distanceUnit=MI&sort=-population&offset=0&limit=1&`,
            {
                headers: {
                    ...getApiHeadersLocations(),
                },
            }
        ).then((response) => response.json())

        const data = responseData.data.length === 0 ? {} : responseData.data[0]
        return data
    } catch (error) {
        throw new Error(error)
    }
}
