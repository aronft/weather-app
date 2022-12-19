import React, { useEffect } from 'react';
import './sass/index.scss'
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather'
import { ForeCast } from './components/ForeCast/ForeCast'
import './_main-app.scss'
export const MainApp = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const {latitude, longitude} = position.coords
      // getWeather(latitude, longitude).then(data => console.log(data))
    })
  }, [])
  return (
    <div className={'main-app'}>
      <CurrentWeather />
      <ForeCast />
    </div>
  );
};