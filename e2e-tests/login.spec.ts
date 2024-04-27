import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test('to have a title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Authentication/);
  });

  test('to have a form', async ({ page }) => {
    await page.goto('/');

    // Has login form
    const loginForm = await page.getByTestId('login-form');

    // Login form is visible
    await expect(loginForm).toBeVisible();
  });

  test('to have an email input field', async ({ page }) => {
    await page.goto('/');

    const emailInput = await page.getByTestId('email-input');

    // Login form is visible
    await expect(emailInput).toBeVisible();
  });

  test('to have an password input field', async ({ page }) => {
    await page.goto('/');

    const passwordInput = await page.getByTestId('password-input');

    // Login form is visible
    await expect(passwordInput).toBeVisible();
  });

  test('to submit correct credentials', async ({ page }) => {
    await page.goto('/');

    // Has login form
    await page.getByTestId('email-input').fill('demo@demo.com');
    await page.getByTestId('password-input').fill('fake');

    // Login form is visible
    await page.getByTestId('login-button').click();
  });
});