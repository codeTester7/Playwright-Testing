const {test, expect} = require('@playwright/test');

// Method 1
// test('Browser Playwirght test', async ({browser}) => {
    //code goes here
    //running test on chrome
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://amazon.com');
//     await page.locator('').fill('');
//     await page.locator('').click();
// });


//Method 2
test('Page Playwirght test', async ({page}) => {
    await page.goto('https://www.instagram.com/');
    // const title = await page.title();
    // console.log(title);
    // await expect(page).toHaveTitle(instagram); //Assertion
    await page.locator('[type=text]').fill('admin@user'); 
    await page.locator('[type=password]').fill('admin@123');
    await page.locator('[type=submit]').click();
});