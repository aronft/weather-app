import React from 'react';
import './_forecast.scss'
import { Button } from '../Button/Button'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import { UpcommingWeather } from '../UpcommingWeather/UpcommingWeather'
import { CurrentHighlights } from '../CurrentHighlights/CurrentHighlights'

export const ForeCast = () => {
  return (
    <section className={'forecast'}>
      <header className={'forecast__header'}>
        <div className="forecast__options">
          <Button className={'btn btn--icon btn-gray-light text-primary-dark wgh-700'}>°C</Button>
          <Button className={'btn btn--icon btn-primary-light wgh-700'}>°F</Button>
        </div>
      </header>

      <div className="forecast__body">
        <UpcommingWeather wetaherList={[]} />
        <h2 className={'text-m'}>Today's Highlights</h2>
        <CurrentHighlights />
      </div>
      <footer className={'forecast__footer'}><p className={'text-gray text-xs'}>created by blazte - &nbsp;<a href="https://devchallenges.io/" className={'text-gray-light'}>devChallenge.io</a></p></footer>
    </section>
  );
};
