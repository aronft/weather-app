import React from 'react'

import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'

import styles from './_current_highlights.module.scss'

export const CurrentHighlights = () => {
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
                    7<span className={'text-l wgh-500'}>mph</span>
                </p>
            </Card>
            <Card title={'Humidity'} footer={footerHumidity}>
                <p className={'text-2l wgh-700'}>
                    84<span className={'text-l wgh-500'}>%</span>
                </p>
            </Card>
            <Card title={'Visibility'}>
                <p className={'text-2l wgh-700'}>
                    6,4 <span className={'text-l wgh-500'}>miles</span>
                </p>
            </Card>
            <Card title={'Air Pressure'}>
                <p className={'text-2l wgh-700'}>
                    998 <span className={'text-l wgh-500'}>mb</span>
                </p>
            </Card>
        </div>
    )
}
