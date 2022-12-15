import React from 'react';
import './current-weather.scss'
import shower from '../../assets/images/Shower.png'
import { Button } from '../Button/Button'

export const CurrentWeather = () => {
  return (
    <section className={'current-weather'}>
      <header className="current-weather__header">
        <Button className={'btn btn-gray text-gray-light'}>Search for places</Button>
        <Button className={'btn btn--icon btn-gray text-gray-light'}>
          <i className="fa-solid fa-location-crosshairs"></i>
        </Button>
      </header>

      <div className="current-weather__body">
        <img src={shower}
             alt=""/>
        <p className={'text-xl'}>15<span className={'text-l text-gray'}>°C</span></p>
        <p className={'text-gray text-l'}>shower</p>
      </div>

      <footer className="current-weather__footer">
        <p className={'text-m text-gray-dark'}>Today <span className="period"></span> Fri, 5 Jun</p>
        <div className="current-weather__location text-gray-dark">
          <i className="fa-solid fa-location-dot"></i>
          Helsinki
        </div>
      </footer>
    </section>
  );
};