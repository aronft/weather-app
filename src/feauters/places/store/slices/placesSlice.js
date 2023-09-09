import { ACTUAL_PLACE } from '../../../../constants'

export const createPlacesSlice = (set) => ({
    places: [],
    actualPlace: ACTUAL_PLACE,
    isLoading: false,
    setPlaces: (places) => set((state) => ({ places })),
    setActualPlace: (place) =>
        set((state) => {
            return {
                actualPlace: place,
            }
        }),

    startLoadnig: () => set(() => ({ isLoading: true })),
    endLoadnig: () => set(() => ({ isLoading: false })),
})
