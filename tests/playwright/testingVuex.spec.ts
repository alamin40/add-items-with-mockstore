import { test, expect } from '@playwright/test';

test('renders items from Vuex store', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Your app's URL

  const listItemTitles = await page.locator('[data-testid="add-list-item-title"]');
  await expect(listItemTitles).toHaveCount(3); // Verify there are 3 items

  // Check specific item content
  await expect(listItemTitles.nth(0)).toHaveText('Mock Item 1');
  await expect(listItemTitles.nth(1)).toHaveText('Mock Item 2');
  await expect(listItemTitles.nth(2)).toHaveText('Mock Item 3');
});
