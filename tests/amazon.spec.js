const {test, expect} = require('@playwright/test');

test.beforeEach('Run before each test', async ({page}) => {
    await page.goto('https://www.amazon.in/');
});

test.afterEach('Run after each test', async ({page}) => {
    await page.waitForTimeout(5000);
});

test('Item Purchase on Amazon', async ({page}) => {
    await page.click('#twotabsearchtextbox');
    await page.fill('#twotabsearchtextbox', 'iphone 15');
    await page.click('#nav-search-submit-button');
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name: 'Apple iPhone 15 (128 GB) - Black'}).nth(1).click();
    // await page.waitForTimeout(5000);
    // await page.getByRole('input', {value : 'Add to Cart'}).click();
})