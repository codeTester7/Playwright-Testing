import {test, expect} from '@playwright/test';
const baseURL = 'https://demoblaze.com/';

// TEST for login page
test('login page test', async ({page}) => {
    // this will redirect user to the main page
    await page.goto(baseURL);

    await page.click('id=login2');
    //username locator -- html element
    await page.fill('id=loginusername', 'pavanol');
    //passward locator -- html element
    await page.fill('id=loginpassword', 'test@123');
    //login button locator -- css
    await page.click("button[onclick='logIn()']");
    console.log('Login successfully');

    //log out button locator -- xpath
    const logOutLink = await page.locator("//a[@id='logout2']");

    await expect(logOutLink).toBeVisible();
    console.log('Log out button is visible');
});

// TEST for multiple links on the webage
test('selecting multiple elements on the page', async ({page}) => {
    await page.goto(baseURL);

    // here we are selecting multiple links present on the home page
    const links = await page.$$('a');
    for(const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }
});

// TEST for all the product elements on the webpage
test('product name on the page', async ({page}) => {
    await page.goto(baseURL);

    // waitForSelector method allows page to load completely before any validations
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    // here $$ locator will return all the loactor associated with the Xpath mentioned
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a"); // to get multiply elements we use {$$} as locator

    // looping is done to get each element form products array and get the textContent for each
    for(const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }
});

// TEST for builtIn function .getByAltText()
test('GET_BY_ALT_TEXT', async ({page}) => {
    await page.goto(baseURL);

    // getByAltText will give the element with the mentioned alt text
    const slide2 = await page.getByAltText('First slide');
    await expect(slide2).toBeVisible();
    console.log("Slide 2 is visible on the home page...");
});

// TEST for builtIn function .getByPlaceholder()
test.skip('GET_BY_PLACEHOLDER', async ({page}) => {

    await page.goto(baseURL);
    await page.click('id=signin2');
    await page.getByPlaceholder("Username").fill("dummyName");
    await page.getByPlaceholder("Password").fill("dummy@123");
    await page.click("button[onclick='register()']");

});

// TEST for builtIn function .getByRole()
test('GET_BY_ROLE', async ({page}) => {
    await page.goto(baseURL);
    await page.getByRole('input', {type: 'submit'});
});

// TEST for builtIn function .getByText()
test('GET_BY_TEXT', async ({page}) => {
    await page.goto(baseURL);
    await page.click('id=login2');
    //username locator -- html element
    await page.fill('id=loginusername', 'pavanol');
    //passward locator -- html element
    await page.fill('id=loginpassword', 'test@123');
    //login button locator -- css
    await page.click("button[onclick='logIn()']");
    const nameOfUser = await page.locator("//a[@id='nameofuser']").textContent();
    // await expect(await page.getByText(nameOfUser)).toBeVisible();
});

// TEST for buildIn function .getByLabel()
test('GET_BY_LABEL', async ({page}) => {
    await page.goto(baseURL);
    await page.click('id=login2');
    const Label1 = await page.getByLabel("Username:");
    const usernameLabel = await Label1.textContent();
    await page.locator('id=loginusername').fill('pavanol');
    const Label2 = await page.getByLabel("Password:");
    // const passwordLabel = await Label2.textContent();
    await page.locator('id=loginpassword').fill('test@123');
    await page.click("button[onclick='logIn()']");
});

