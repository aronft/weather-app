import React from 'react';
import './sass/index.scss'
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather'

export const MainApp = () => {
  return (
    <>
      <CurrentWeather />
    </>
  );
};