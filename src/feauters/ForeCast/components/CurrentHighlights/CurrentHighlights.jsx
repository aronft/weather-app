import React from 'react'

import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'

import styles from './_current_highlights.module.scss'

export const CurrentHighlights = ({ forecast }) => {
    const footerCurrent = (
        <>
            <Button className={'btn btn--icon btn-gray-darken text-gray-light'}>
                <i className="fa-solid fa-location-arrow"></i>
            </Button>
        </>
    )

    const footerHumidity = <>barra</>
    return (
        <div className={styles['current-highlights']}>
            <Card title={'Wind status'} footer={footerCurrent}>
                <p className={'text-2l wgh-700'}>
                    {forecast.windspeed?.value}
                    <span className={'text-l wgh-500'}>
                        {forecast.windspeed?.unit}
                    </span>
                </p>
            </Card>
            <Card title={'Humidity'} footer={footerHumidity}>
                <p className={'text-2l wgh-700'}>
                    {forecast.humidity?.value}
                    <span className={'text-l wgh-500'}>
                        {forecast.humidity?.unit}
                    </span>
                </p>
            </Card>
            <Card title={'Visibility'}>
                <p className={'text-2l wgh-700'}>
                    {forecast.visibilty?.value}
                    <span className={'text-l wgh-500'}>
                        {forecast.visibilty?.unit}
                    </span>
                </p>
            </Card>
            <Card title={'Air Pressure'}>
                <p className={'text-2l wgh-700'}>
                    {forecast.airPresure?.value}
                    <span className={'text-l wgh-500'}>
                        {forecast.airPresure?.unit}
                    </span>
                </p>
            </Card>
        </div>
    )
}
