import { expect, test } from '@playwright/test'

test.describe('When user search for place and select a place for search forecast', () => {
    test('should open sidebar on click button', async ({ page, request }) => {
        await page.goto('/')

        const button = await page.getByRole('button', {
            name: 'Search for places',
            exact: true,
        })

        await button.click()

        const searchButton = await page.getByLabel('Search', { exact: true })
        const closeButton = await page.getByLabel('close button', {
            exact: true,
        })
        const inputSearch = await page.getByLabel('search city', {
            exact: true,
        })

        await inputSearch.fill('Lima')
        await searchButton.click()

        const places = await page.getByTestId('places-list')

        const place = await places.getByRole('button').first()

        await place.click()
        await closeButton.click()

        const locationText = await page.getByLabel('Current Location', {
            exact: true,
        })

        expect(await locationText.textContent()).toBe('Lima')
    })
})
