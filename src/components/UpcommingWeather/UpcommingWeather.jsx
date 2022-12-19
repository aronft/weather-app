import React from 'react';
import { WeatherCard } from '../WeatherCard/WeatherCard'
import './_upcommingWeather.scss'

export const UpcommingWeather = ({wetaherList = []}) => {
  return (
    <div className="weather-list">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};
