import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '../../../../components/Button/Button'
import { usePlaces } from '../../hooks/usePlaces'
import styles from './_places-search.module.scss'

const schema = yup
    .object({
        search: yup.string().required(),
    })
    .required()

export const PlacesSearch = () => {
    const { isLoading, getPlacesByName } = usePlaces()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        if (isLoading) {
            return
        }
        getPlacesByName({ search: data.search }).then()
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
                <Button
                    className={'btn btn-secondary text-gray-light'}
                    disabled={isLoading}
                >
                    Search{' '}
                </Button>
            </form>
            <p className="text-danger text-xs">{errors.search?.message}</p>
        </div>
    )
}
