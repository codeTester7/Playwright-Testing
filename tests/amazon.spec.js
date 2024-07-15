const {test, expect} = require('@playwright/test');

test('Item Purchase on Amazon', async ({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.click('#twotabsearchtextbox');
    await page.fill('#twotabsearchtextbox', 'iphone 15');
    await page.click('#nav-search-submit-button');
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name: 'Apple iPhone 15 (128 GB) - Black'}).nth(1).click();
    // await page.waitForTimeout(5000);
    await page.click("//input[@id='add-to-cart-button']");
})