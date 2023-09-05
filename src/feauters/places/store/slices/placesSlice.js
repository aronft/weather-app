export const createPlacesSlice = (set) => ({
    places: [
        {
            id: 1,
            name: 'lima',
        },
    ],
    actualPlace: null,
    setPlaces: (places) => set((state) => ({ places })),
    setActualPlace: (place) =>
        set((state) => {
            return {
                actualPlace: place,
            }
        }),
})
