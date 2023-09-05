export const createPlacesSlice = (set) => ({
    places: [],
    addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
})
