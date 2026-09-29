// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();


  await loginPage.login('totifo2869@dreameg.com', 'totifo2869');
  
 await expect(page.locator('.woocommerce-MyAccount-navigation')).toBeVisible
});