import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.goibibo.com/bus/');

  // Entering Source place
  await page.getByPlaceholder('Enter Source').click();
  await page.getByPlaceholder('Enter Source').fill('ben');
  await page.getByText('Bangalore (Bengaluru),').click();

  // Entering Destination place
  await page.getByPlaceholder('Enter Destination').click();
  await page.getByPlaceholder('Enter Destination').fill('co');
  await page.getByText('Coimbatore, Tamil Nadu').click();

  // Selecting day of journey
  await page.getByText('Tomorrow').click();
  await page.getByTestId('searchBusBtn').click();
  await page.getByRole('button', { name: 'SHOW BUSES' }).click();
  await page.locator('label').filter({ hasText: '21:15Shanthinagar bmtc' }).locator('span').first().click();
  await page.locator('div:nth-child(30) > .SeatWithTooltipstyles__BusSeat-sc-dkrka-2 > .BusSeatIcon-sc-fk5j7x-0').click();
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // Adding passanger name
  await page.getByPlaceholder('Enter Full Name').click();
  await page.getByPlaceholder('Enter Full Name').fill('dummy');

  // Adding passanger age
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('23');

  // Adding passanger gender
  await page.locator('li').filter({ hasText: /^Male$/ }).getByRole('img').click();

  // Adding email
  await page.getByPlaceholder('Enter Email Address').click();
  await page.getByPlaceholder('Enter Email Address').fill('dummy@email.com');

  // Adding phone number
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('1234567890');
  await page.getByRole('button', { name: 'Pay ₹' }).click();
  await page.locator('b').click();
  await page.getByRole('button', { name: 'Pay ₹' }).click();
  await page.goto('https://payments.goibibo.com/pagos/v2/ui/checkout/?checkoutId=80755045725574');
});