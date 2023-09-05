import React, { useEffect } from 'react'

import { Button } from '../../../../components/Button/Button'
import { usePlacesStore } from '../../store/placesStore'
import { PlacesList } from '../PlacesList/PlacesList'
import { PlacesSearch } from '../PlacesSearch/PlacesSearch'
import styles from './_places-sidebar.module.scss'

export const PlacesSidebar = () => {
    const toggleSidbar = usePlacesStore((state) => state.toggleSidbar)
    const isOpenSidebar = usePlacesStore((state) => state.isOpenSidebar)
    const places = usePlacesStore((state) => state.places)
    const setActualPlace = usePlacesStore((state) => state.setActualPlace)
    const actualPlace = usePlacesStore((state) => state.actualPlace)

    useEffect(() => {
        if (actualPlace === null) {
            return
        }
        console.log(actualPlace)
    }, [actualPlace])

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
            <PlacesList list={places} setPlace={setActualPlace} />
        </aside>
    )
}
