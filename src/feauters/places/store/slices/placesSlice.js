export const createPlacesSlice = (set) => ({
    places: [],
    actualPlace: null,
    setPlaces: (places) => set((state) => ({ places })),
    setActualPlace: (place) =>
        set((state) => {
            return {
                actualPlace: place,
            }
        }),
})
