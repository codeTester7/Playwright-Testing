const {test, expect} = require('@playwright/test');
const URL = 'https://www.flipkart.com/';
const pinCode = '560102';
test.describe('Purchase phone on flipkart @tag1', () => {
    test.beforeEach('Go to URL', async ({page}) => {
        await page.goto(URL);
    });

    test('Vivo mobile purchase', async ({page}) => {
        const searchBar = await page.locator("input[placeholder='Search for Products, Brands and More']");
        // await page.getByPlaceholder('Search for Products, Brands and More').click();
        await page.locator("input[placeholder='Search for Products, Brands and More']").click();
        // await page.getByPlaceholder('Search for Products, Brands and More').fill('vivo 5g mobile);
        expect(searchBar).toBeEnabled();
        expect(searchBar).toBeEditable();
        expect(searchBar).toBeEmpty();
        searchBar.fill('vivo 5g mobile');
        // await page.getByPlaceholder('Search for Products, Brands and More').press('Enter');
        searchBar.press('Enter');
        await page.locator("div[class='KzDlHZ']").nth(0).click();
        // await page.waitForTimeout(3000);


        // await page.locator('#pincodeInputId').click();
        // await page.locator("input[id='pincodeInputId']").click();
        await page.getByTestId("off").click();
        // await page.locator('#pincodeInputId').fill(pinCode);
        await page.getByTestId("off").fill(pinCode);
        // const checkBtn = await page.locator('.i40dM4');
        // const checkBtn = await page.locator(".i40dM4");
        // await expect(checkBtn).toBeVisible();
        await page.getByText("Check").click();


        // await page.locator('button', {name : 'Add to cart'}).click();
        await page.locator("a[class='_9Wy27C']").click();
        await page.waitForTimeout(3000);
    });

    test.afterEach('Close the page', async ({page}) => {
        await page.close();
    });
});