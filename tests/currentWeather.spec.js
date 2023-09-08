const { test, expect } = require('@playwright/test')

test.use({
    geolocation: { latitude: -12.04318, longitude: -77.02824 },
    permissions: ['geolocation'],
})

test('has button for search places', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const button = await page.getByRole('button', { name: /search for places/ })

    await expect(button).not.toBeUndefined()
})

test.describe('when user ask for his location', () => {
    test('Show button for ask location ', async ({ page }) => {
        await page.goto('http://localhost:3000')

        const button = await page.getByRole('button', {
            name: /Get current location/,
        })
        await button.click()

        await expect(button).not.toBeUndefined()
    })

    test('after get location not show default forecast data', async ({
        page,
    }) => {
        await page.goto('http://localhost:3000')

        const button = await page.getByRole('button', {
            name: /Get current location/,
        })
        await button.click()

        const elementTemperature = await page.$('[aria-label="Temperature"]')

        const temperature = (await elementTemperature.textContent()).slice(
            0,
            -2
        )

        const imageWithAlt = await page.$('[aria-label="Weather unknow"]')

        expect(imageWithAlt).toBeNull()
        expect(parseInt(temperature)).not.toBe(0)
    })
})
