// @ts-check
const { test, expect } = require('@playwright/test')

test('has button for search places', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const button = await page.getByRole('button', { name: /search for places/ })

    await expect(button).not.toBeUndefined()
})
