import { create } from 'zustand'

import { createSidebarSlice } from './slices/placesSiderSlice'
import { createPlacesSlice } from './slices/placesSlice'

export const usePlacesStore = create((...a) => ({
    ...createSidebarSlice(...a),
    ...createPlacesSlice(...a),
}))
