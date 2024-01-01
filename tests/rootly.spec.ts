import {
  BatchInfo,
  Configuration,
  EyesRunner,
  ClassicRunner,
  VisualGridRunner,
  BrowserType,
  DeviceName,
  ScreenOrientation,
  Eyes,
  Target
} from '@applitools/eyes-playwright';
import { test, expect } from '@playwright/test';
async function login(page, email, password) {
  await page.goto('https://rootly.com/users/sign_in');

  // Fill in the email and password fields
  await page.getByLabel('Your Email Address').fill(email);
  await page.getByLabel('Your Password').fill(password)
  // Click the "Sign In" button
  await page.getByRole('button', { name: 'Sign In' }).click()

  // Close window
  await page.getByRole('button', { name: 'Close' }).click()
 
  
}

test('login', async ({ page }) => {
  await login(page, 'geyim81278@wikfee.com', 'Ghbdtn1234!')
  //assertion
  await expect(page.getByRole('link', { name: 'Kate R Kate R' })).toBeVisible()
   // assertion for success message
  await expect (page.getByText('Signed in successfully.')).toBeVisible()
  // cookies is present and close cookies window
  await page.getByRole('button', { name: 'Deny all' }).click()
   // validate logout cta
  await page.getByRole('link', { name: 'Kate R Kate R' }).click()
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible()
})

test('first step', async ({ page }) => {
  await login(page, 'geyim81278@wikfee.com', 'Ghbdtn1234!')
  await page.getByRole('link', { name: 'Overview of Rootly' }).click()
  // assertion for heading 
  await expect (page.getByRole('heading', { name: 'Overview of Rootly' })).toBeVisible()
  //assertion for button
  await expect (page.getByRole('button', { name: "Let's Go" })).toBeVisible()
  //would add visual testing - this is just an example 
  //await eyes.check('Overview of Rootly', Target.window().fully().layout());

});
