import React from 'react';
import { WeatherImage } from '../WeatherImage/WeatherImage'
import { Card } from '../Card/Card'

export const WeatherCard = ({title}) => {
  const footer = <>
    <p className={'text-s'}>16°C</p>
    <p className={'text-s'}>16°C</p>
  </>
  return (
    <Card title={'Tomorrow'} footer={footer}>
        <WeatherImage className={'weather-image-container--s'}/>
    </Card>
  );
};
