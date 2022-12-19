import React from 'react';
import './_weather-image.scss'
import shower from '../../assets/images/Shower.png'

export const WeatherImage = ({images =  ['Shower'], className = ''}) => {
  return (
    <div className={`weather-image-container ${className}`}>
      <img src={shower}
           alt=""/>
    </div>
  );
};
