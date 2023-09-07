import { Place } from '../../../../constants'

export const createPlacesSlice = (set) => ({
    places: [],
    actualPlace: null,
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
