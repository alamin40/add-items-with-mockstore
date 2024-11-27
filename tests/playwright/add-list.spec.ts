import { test, expect } from '@playwright/test';

test.describe('Date Picker Tests', () => {

  test('should verify that the single date picker exists', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5173');

    // Locate the single date picker
    const datePicker = page.locator('[data-testid="single-date-picker"]');
    await expect(datePicker).toBeVisible(); // Verify it is visible
    console.log('Single Date Picker exists and is visible.');
  });

  test('should select a specific date and verify the value', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5173');
  
    // Click to open the single date picker
    const datePicker = page.locator('[data-testid="single-date-picker"]');
    await datePicker.click();
  
    // Select a specific date (e.g., 15th)
    const dateToSelect = page.locator('[data-testid="single-date-picker"] button:has-text("15")');
    await dateToSelect.click();
  
    // Verify the selected date is displayed correctly
    const selectedDateText = page.locator('[data-testid="selected-date-text"]');
    await expect(selectedDateText).toHaveText('Fri Nov 15 2024 00:00:00 GMT+0100 (Central European Standard Time)');
    console.log('Selected date is displayed correctly.');
  });
  test('should pause for debugging', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5173');
  
    // Pause here to inspect the page
    //await page.pause();
  
    // Locate and interact with an element after inspecting
    const datePicker = page.locator('[data-testid="single-date-picker"]');
    await datePicker.click();
  
    // Further actions
  });
  test('should select a date range and verify functionality', async ({ page }) => {
    console.log('Navigating to the app...');
    await page.goto('http://localhost:5173');
  
    // Open the date range picker
    console.log('Opening the Date Range Picker...');
    const dateRangePicker = page.locator('[data-testid="date-range-picker"]');
    console.log('Checking if date range picker exists...');
    await expect(dateRangePicker).toBeVisible();
    console.log('Date range picker is visible.');
    await dateRangePicker.click();
  
    // Select the start date (e.g., 5th)
    console.log('Selecting Start Date...');
    const startDate = page.getByRole('button', { name: '5', exact: true }).nth(1);
    console.log(`Start Range Date Button Text: ${(await startDate.textContent()).trim()}`);
    await startDate.click();
    console.log('Start range date button clicked.');
  
    // Select the end date (e.g., 14th)
    console.log('Selecting End Date...');
    const endDate = page.getByRole('button', { name: '14' }).nth(1);
    console.log(`End Range Date Button Text: ${(await endDate.textContent()).trim()}`);
    await endDate.click();
    console.log('End range date button clicked.');
  
    // Wait for the DOM to update
    console.log('Waiting for DOM to update...');
    await page.waitForFunction(() => {
      const startElement = document.querySelector('[data-testid="selected-start-date"]');
      const endElement = document.querySelector('[data-testid="selected-end-date"]');
      return (
        startElement?.textContent?.trim() !== 'No Start Date' &&
        endElement?.textContent?.trim() !== 'No End Date'
      );
    }, { timeout: 10000 });
    console.log('DOM update completed.');
  
    // Debugging: Extract and log the content of selected range dates
    console.log('Debugging Selected Range Dates...');
    const startDateText = (await page.locator('[data-testid="selected-start-date"]').textContent())?.trim();
    const endDateText = (await page.locator('[data-testid="selected-end-date"]').textContent())?.trim();
    console.log(`Extracted Start Date: ${startDateText}`);
    console.log(`Extracted End Date: ${endDateText}`);
  
    // Expected dates
    const expectedStartDate = 'November 5, 2024';
    const expectedEndDate = 'November 14, 2024';
  
    // Assertions for start and end dates
    expect(startDateText).toBe(expectedStartDate);
    expect(endDateText).toBe(expectedEndDate);
    console.log('Start and End dates are correct.');
  });

  



  
});




