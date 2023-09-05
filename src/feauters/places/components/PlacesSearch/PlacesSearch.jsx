import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as yup from 'yup'

import { Button } from '../../../../components/Button/Button'
import { getVariables } from '../../../../utils'
import { getPlacebyName } from '../../api/getPlacesByName'
import { usePlacesStore } from '../../store/placesStore'
import styles from './_places-search.module.scss'

const schema = yup
    .object({
        search: yup.string().required(),
    })
    .required()

export const PlacesSearch = () => {
    const variables = getVariables()
    const setPlaces = usePlacesStore((state) => state.setPlaces)
    // const { data, error, isLoading } = useSWR(
    //     `${variables.API_GEODB_CITIES}/cities`,
    //     getPlacebyName
    // )
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        getPlacebyName({
            url: `${variables.API_GEODB_CITIES}/cities`,
            params: { minPopulation: 1000000, namePrefix: 'lima' },
        }).then((data) => {
            setPlaces(data)
        })
    }

    return (
        <div className={styles['places-search-container']}>
            <form
                className={styles['places-search__form']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <div className={styles['search-input-container']}>
                        <input
                            type="text"
                            name="search"
                            placeholder="search city"
                            className={`${styles['search-input']} ${
                                errors.search?.message
                                    ? styles['search-input--error']
                                    : ''
                            }`}
                            {...register('search')}
                        />
                        <i
                            className={`${styles['search-input__icon']} fa-solid fa-magnifying-glass`}
                        ></i>
                    </div>
                </div>
                <Button className={'btn btn-secondary text-gray-light'}>
                    Search{' '}
                </Button>
            </form>
            <p className="text-danger text-xs">{errors.search?.message}</p>
        </div>
    )
}
