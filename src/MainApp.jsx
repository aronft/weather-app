import React, { useEffect } from 'react';
import './sass/index.scss'
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather'
import { getWeather } from './services/getWeather'
import { ForeCast } from './components/ForeCast/ForeCast'

export const MainApp = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const {latitude, longitude} = position.coords
      // getWeather(latitude, longitude).then(data => console.log(data))
    })
  }, [])
  return (
    <>
      <CurrentWeather />
      <ForeCast />
    </>
  );
};