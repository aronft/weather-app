import { getApiHeaders } from '../../../utils'

export const getPlacebyName = async ({
    url,
    token,
    params = { namePrefix: '', minPopulation: 0 },
}) => {
    const queryString = new URLSearchParams(params).toString()
    const data = await fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: {
            ...getApiHeaders(),
        },
    }).then((res) => res.json())

    return data.data
}
