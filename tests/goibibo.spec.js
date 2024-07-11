import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.goibibo.com/');
  await page.locator('.logSprite').click();
  await page.getByRole('link', { name: 'Flights', exact: true }).click();
  
  // Selecting From city
  await page.getByText('FromEnter city or airport').click();
  await page.getByRole('textbox').fill('ben');
  await page.getByText('Bengaluru, India').click();

  // Selecting To city
  await page.getByRole('textbox').fill('new');
  await page.getByText('New Delhi, India').click();

  // Selecting date of journey
  await page.getByText('11 Jul\'').click();
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
  await page.goto('https://www.goibibo.com/flights/air-BLR-DEL-20240720--2-1-1-E-D?');
});