import React from 'react'

import { Loader } from '../../../../components'
import { Button } from '../../../../components/Button/Button'
import { useForeCast } from '../../../ForeCast/hooks'
import { usePlaces } from '../../hooks/usePlaces'
import { usePlacesStore } from '../../store/placesStore'
import { PlacesList } from '../PlacesList/PlacesList'
import { PlacesSearch } from '../PlacesSearch/PlacesSearch'
import styles from './_places-sidebar.module.scss'

export const PlacesSidebar = () => {
    const toggleSidbar = usePlacesStore((state) => state.toggleSidbar)
    const isOpenSidebar = usePlacesStore((state) => state.isOpenSidebar)
    const { isLoading, places } = usePlaces()
    const { setActualAndCall } = useForeCast()

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

            {isLoading ? (
                <Loader className={styles['center-spinner']} />
            ) : (
                <PlacesList list={places} setPlace={setActualAndCall} />
            )}
        </aside>
    )
}
