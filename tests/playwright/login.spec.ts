import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

test('should log in successfully', async ({ page }) => {
  // Access the credentials from environment variables
  const username = process.env.LOGIN_USERNAME || '';
  const password = process.env.LOGIN_PASSWORD || '';

  // Step 1: Navigate to the login page
  await page.goto('https://demo-9999.dev.store.aiperia.io/auth/login'); // Replace with the actual login URL

  // Step 2: Fill in username and password
  await page.locator('#input-4').fill(username); // Username input
  await page.locator('#input-6').fill(password); // Password input

  // Step 3: Click the login button
  await page.locator('#loginButton').click();

  // Step 4: Verify login success
  // Option 1: Check if the URL changes to the dashboard
  await expect(page).toHaveURL('https://demo-9999.dev.store.aiperia.io/tasks'); // Replace with the expected post-login URL
});
