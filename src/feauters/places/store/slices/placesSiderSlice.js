export const createSidebarSlice = (set) => ({
    isOpenSidebar: false,
    toggleSidbar: () =>
        set((state) => {
            console.log(state)
            return {
                isOpenSidebar: !state.isOpenSidebar,
            }
        }),
})
