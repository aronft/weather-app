import { create } from 'zustand'

import { foreCastSlice } from './slices/foreCastSlice'

export const useForeCastStore = create((...a) => ({
    ...foreCastSlice(...a),
}))
