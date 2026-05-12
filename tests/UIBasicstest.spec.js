const {test} = require('@playwright/test');


test('First Playwright test', async function({browser})
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});

test('google test', async function({page})
{
    await page.goto("https://support.electrolux.no/support-articles");
});