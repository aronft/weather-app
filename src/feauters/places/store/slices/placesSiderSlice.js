export const createSidebarSlice = (set) => ({
    isOpenSidebar: false,
    toggleSidbar: () =>
        set((state) => {
            return {
                isOpenSidebar: !state.isOpenSidebar,
            }
        }),
})
