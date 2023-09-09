import { expect, test } from '@playwright/test'
test.use({
    geolocation: { latitude: -12.04318, longitude: -77.02824 },
    permissions: ['geolocation'],
})

test.describe('when data loaded in forecast', () => {
    test('should the current hightlights data not be the default values', async ({
        page,
    }) => {
        await page.goto('/')

        const button = await page.getByRole('button', {
            name: /Get current location/,
        })
        await button.click()

        const windspeed = await page
            .locator('[aria-labelledby="windspeed-content"]')
            .getByRole('paragraph')
            .textContent()

        const humidity = await page
            .locator('[aria-labelledby="humidity-content"]')
            .getByRole('paragraph')
            .textContent()

        const visibility = await page
            .locator('[aria-labelledby="Visibility-content"]')
            .getByRole('paragraph')
            .textContent()

        const airPresure = await page
            .locator('[aria-labelledby="air-presure-content"]')
            .getByRole('paragraph')
            .textContent()

        expect(visibility).not.toBe(/0km/i)
        expect(humidity).not.toBe(/0%/i)
        expect(windspeed).not.toBe(/0kph/i)
        expect(airPresure).not.toBe(/0mb/i)
    })

    test('should the upcomming weather not be the default values', async ({
        page,
    }) => {
        await page.goto('/')

        const button = await page.getByRole('button', {
            name: /Get current location/,
        })
        await button.click()

        const cards = await page.getByTestId('weather-temperature')

        const total = await cards.count()

        for (let i = 0; i < total; i++) {
            const temperature = await cards.nth(i).textContent()
            const temperatureNumber = parseInt(temperature.slice(0, -2))
            expect(temperatureNumber).not.toBe(0)
        }
    })
})
