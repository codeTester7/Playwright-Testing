import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in').fill('iphone 15');
  await page.getByPlaceholder('Search Amazon.in').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 15 (128 GB) - Black' }).nth(1).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/cart/add-to-cart/ref=dp_start-bbf_1_glance');
  await page1.goto('https://www.amazon.in/cart/smart-wagon?newItems=af45fc6e-028d-491e-bbb3-3ce05f8985bf,1&ref_=sw_refresh');
  await page1.getByLabel('Proceed to Buy (1 item) Buy').click();
});