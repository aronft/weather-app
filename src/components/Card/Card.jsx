import React from 'react';
import { WeatherImage } from '../WeatherImage/WeatherImage'
import './_card.scss'
export const Card = ({children, title, footer}) => {
  return (
    <div className={'card'}>
      <div className="card__title">
        <p className="text-s">{title}</p>
      </div>
      <div className="card__body">
        {children}
      </div>
      <div className="card__footer">
        {footer}
      </div>
    </div>
  );
};
