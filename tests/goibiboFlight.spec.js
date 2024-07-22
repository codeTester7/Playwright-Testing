import { test, expect } from '@playwright/test';
test('test', async ({page}) => {
  await page.goto('https://www.goibibo.com/flights/');
  await expect(page).toHaveURL('https://www.goibibo.com/flights/');
  // await page.locator('.logSprite').click();
  // await page.getByRole('link', { name: 'Flights', exact: true }).click();
  await expect(page).toHaveTitle('Flight Tickets, Flights Booking at Lowest Airfare, Book Air Tickets-Goibibo');
  // Selecting From city
  await page.getByText('FromEnter city or airport').click();
  await page.getByRole('textbox').fill('ben');
  await page.getByText('Bengaluru, India').click();

  // Selecting To city
  await page.getByRole('textbox').fill('new');
  await page.getByText('New Delhi, India').click();

  // Selecting date of journey
  await page.locator('.DayPicker-Day .DayPicker-Day--start .DayPicker-Day--selected').click();
  await page.getByLabel('Sat Jul 20').click();

  // Selecting passanger type
  await page.getByText('Adult').click();

  // Selecting number of adults 
  await page.locator('div').filter({ hasText: /^1$/ }).locator('path').nth(1).click();

  // Selecting number of childerns
  await page.locator('div').filter({ hasText: /^Children\(Aged 2-12 yrs\)0$/ }).locator('path').nth(1).click();

  // Selecting number of infants
  await page.locator('div').filter({ hasText: /^0$/ }).getByRole('img').nth(1).click();
  await page.getByText('Done').click();
  await page.getByText('SEARCH FLIGHTS').click();

  // Redirecting to the flight selection page
  await page.waitForURL('https://www.goibibo.com/flights/air-BLR-DEL-20240720--2-1-1-E-D?');
  await page.goto('https://www.goibibo.com/flights/air-BLR-DEL-20240720--2-1-1-E-D?');
  await page.locator('button', {value : 'VIEW FARES'}).first().click();

  // Due to page not loading on testing mode i am not able to proceed further i have added the screenshot with the test report for the problem
});