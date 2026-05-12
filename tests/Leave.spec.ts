

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
 
test('Leave Apply', async ({ page }) => {
  
    await page.goto("https://hr.app.bombayworks.org/login/");
    await page.getByText("Click here to login").click();
    console.log(process.env.EMAIL);
    await page.getByLabel('Email or phone').fill(process.env.EMAIL!);
   await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Enter your password').fill(process.env.PASSWORD!)
   await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('link', { name: 'Apply for leave' }).click();
   await page.locator('select[name="leave_type"]')
    .selectOption({ label: 'Sick Leave' });
    await page.locator('#start_date').click();
await page.locator('.ui-state-highlight').click();
await page.locator('#end_date').click();
await page.locator('.ui-state-highlight').click();

   await page.pause();


    });