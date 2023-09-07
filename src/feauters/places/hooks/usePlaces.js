import { getVariables } from '../../../utils'
import { getPlaceByLocationApi } from '../api'
import { getPlacebyName } from '../api/getPlacesByName'
import { usePlacesStore } from '../store/placesStore'

export const usePlaces = () => {
    const places = usePlacesStore((state) => state.places)
    const setPlaces = usePlacesStore((state) => state.setPlaces)
    const actualPlace = usePlacesStore((state) => state.actualPlace)
    const startLoading = usePlacesStore((state) => state.startLoadnig)
    const isLoading = usePlacesStore((state) => state.isLoading)
    const endLoading = usePlacesStore((state) => state.endLoadnig)
    const setActualPlace = usePlacesStore((state) => state.setActualPlace)

    const getPlacesByName = async ({ search }) => {
        const variables = getVariables()
        startLoading()
        const data = await getPlacebyName({
            url: `${variables.API_GEODB_CITIES}/cities`,
            params: { minPopulation: 1000000, namePrefix: search },
        }).catch(() => endLoading())

        endLoading()
        setPlaces(data)

        return data
    }

    const getPlaceByLocation = async ({ latitude, longitude }) => {
        const data = await getPlaceByLocationApi({ latitude, longitude })
        setActualPlace(data)
    }

    return {
        places,
        actualPlace,
        isLoading,
        getPlacesByName,
        setActualPlace,
        getPlaceByLocation,
    }
}
