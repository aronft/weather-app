import React from 'react'

import { Button } from '../../../../components/Button/Button'
import { usePlacesStore } from '../../store/placesStore'
import { PlacesList } from '../PlacesList/PlacesList'
import { PlacesSearch } from '../PlacesSearch/PlacesSearch'
import styles from './_places-sidebar.module.scss'

export const PlacesSidebar = () => {
    const toggleSidbar = usePlacesStore((state) => state.toggleSidbar)
    const isOpenSidebar = usePlacesStore((state) => state.isOpenSidebar)
    return (
        <aside
            className={`${styles.sidebar} ${
                isOpenSidebar ? styles.active : ''
            } `}
        >
            <Button
                className={'btn btn--icon text-gray-light'}
                onClick={toggleSidbar}
            >
                <i className="fa-solid fa-xmark"></i>
            </Button>
            <PlacesSearch />
            <PlacesList list={[]} />
        </aside>
    )
}
