import { getApiHeadersLocations } from '../utils/getApiHeadersLocations'

export const getPlacebyName = async ({
    url,
    token,
    params = { namePrefix: '', minPopulation: 0 },
}) => {
    const queryString = new URLSearchParams(params).toString()
    const data = await fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: {
            ...getApiHeadersLocations(),
        },
    }).then((res) => res.json())

    return data.data
}
