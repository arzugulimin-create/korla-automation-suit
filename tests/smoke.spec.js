import {test, expect} from '@playwright/test';


test('Korla.nl ana sayfa kontrolu', async ({ page }) => {
  // 1. Siteye gitsile
  await page.goto('https://korla.nl');

  // 2. URL adresinga karisila
  await expect(page).toHaveTitle(/korla/i);
  //i for ignore case sezgurliki
});