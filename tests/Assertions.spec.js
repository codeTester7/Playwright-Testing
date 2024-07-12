import {test, expect} from '@playwright/test';

test('Assertion test', async ({page}) => {
    await page.goto('https://www.cleartrip.com/flights');
    await expect(page).toHaveURL('https://www.cleartrip.com/flights');
    await expect(page).toHaveTitle('Flight bookings, Cheap flights, Lowest Air tickets @Cleartrip');

    const clearTripLogo = await page.locator('.mr-7');
    await expect(clearTripLogo).toBeVisible();

    const selectPassanger = await page.locator("div[class='p-relative br-4'] span[class='fw-500 fs-4 ml-2']");
    await expect(selectPassanger).toBeEnabled();

    // await selectPassanger.click();

    await page.getByPlaceholder('Where from?').fill('bang');
    const flightFrom = await page.getByText('Bangalore, IN - Kempegowda');
    await flightFrom.click();
    // await expect(flightFrom).toHaveText('Bangalore, IN - Kempegowda');

    const flightTo = await page.getByPlaceholder('Where to?').fill('new');
    await page.getByText("New Delhi, IN - Indira Gandhi Airport (DEL)").click();
    // await expect(flightTo).toHaveText("New Delhi, IN - Indira Gandhi Airport (DEL)");

    await page.locator('.homeCalender button').first().click();
    await page.locator('span', { hasText: "Search flights"}).click();

});