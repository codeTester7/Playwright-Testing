import {test, expect} from '@playwright/test';

test('google search test', async ({page}) => {
    await page.goto('https://www.google.com');
    await page.fill('textarea.gLFyf', 'iphone');
    await page.click('input[name=btnK]');
});