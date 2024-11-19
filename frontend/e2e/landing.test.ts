import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1').filter({hasText: 'Dream Team'})).toBeVisible();

  	await expect(page.locator('li').filter({ hasText: 'Hello, World!' })).toBeVisible();
  	await expect(page.locator('li').filter({ hasText: 'Goodbye, World!' })).toBeVisible();
});
