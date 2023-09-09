# **1Weather**

1Weather is a weather forecasting app that provides you with information about current and future weather conditions for up to 5 days, along with highlighting the day's key highlights.

## Motivation

The motivation behind creating **"1Weather"** was to enhance my frontend skills and re-enter the world of web development.

Lastly, to complete the [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) from [devchallenges.io](https://devchallenges.io/).

## Features

1. **Current Weather Forecast**: Display the current weather based on your current location, including temperature, conditions (sunny, cloudy, rainy, etc.), wind speed, humidity, and atmospheric pressure.
2. **5-Day Forecast**: Provide a detailed forecast for the next 5 days, including high and low temperatures, weather conditions, and rain probability.
3. **City Search**: Allow users to search and select other cities to get the weather forecast for those locations.

## Technologies Used:

This project was built in React + Vite in addition to:

-   Zustand
-   Jest
-   Playwright
-   Sass
-   css modules
-   prettier
-   eslint

## Getting Started

1. First, install all the dependencies:

```shell
pnpm install
```

2. Before starting the local server, make sure to review the `.env.example` file and request the necessary API keys for:

-   [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities)
-   [visualcrossing](https://www.visualcrossing.com/)

These credentials should go in a `.env` file.

3. Then, run the development server:

```shell
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result.

You can start editing the page by modifying `src/mainApp.jsx`.
