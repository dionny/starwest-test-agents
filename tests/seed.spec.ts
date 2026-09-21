import { test, expect } from '@playwright/test';

// The agents use this seed to open the application before planning or generating.
test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'AUT Checkout Lab' })).toBeVisible();
  });
});
