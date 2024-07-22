import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.goibibo.com/trains/');

  // Seleting Source Station
  await page.getByText('Enter Source Name').click();
  await page.getByRole('textbox').fill('del');
  await page.getByText('NDLS, Delhi - All Stations').click();

  // Selecting Destination Station
  await page.getByText('Enter Destination Name').click();
  await page.getByRole('textbox').fill('chan');
  await page.getByText('Chandigarh - All Stations').click();

  // Selecting date of journey
  await page.locator('div:nth-child(6) > div:nth-child(5)').first().click();

  // Clicking on search train button
  await page.getByText('SEARCH TRAINS').click();

  // Selecting view available trains
  await page.locator('div:nth-child(5) > .TrainCard_trnCrd__vw5dAvlBtn__Eztty').click();

  // Selecting type of seat
  await page.getByRole('button', { name: 'EXECUTIVE CHAIR' }).click();

  // Selecting date and clicking on book now option
  await page.locator('li').filter({ hasText: 'FRI 26 JULAVL 52₹1495Book Now' }).locator('a').click();

  // Adding new passanger details
  await page.getByRole('button', { name: 'ADD NEW TRAVELLER' }).click();

  // Adding name to the form
  await page.getByText('Full name (As per govt. ID)').click();
  await page.getByLabel('Full name (As per govt. ID)').fill('dummy');

  // Adding age to the form
  await page.getByText('Age', { exact: true }).click();
  await page.getByLabel('Age').fill('23');

  // Adding type of meal to the form
  await page.locator('label').filter({ hasText: /^Veg$/ }).click();

  // Clicking on save button
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  // Clicking on proceed to payment option
  await page.getByRole('button', { name: 'Proceed to Payment' }).click();

  await page.waitForTimeout(3000);
});