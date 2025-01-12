const selectors = require('../config/selectors.json');
import { expect } from '@playwright/test';


module.exports = new class LoginPage {
    async goToLoginPage(page){
        await page.goto('https://club-administration.qa.qubika.com/#/auth/login');

        return page;
    }

    async verifyEmailInput(page){
        await expect(await page.locator(selectors.loginPage.emailInput)).toBeVisible();
    }

    async verifyPasswordInput(page){
        await expect(await page.locator(selectors.loginPage.passwordInput)).toBeVisible();
    }

    async verifyAuthenticateButton(page){
        await expect(await page.locator(selectors.loginPage.authenticateButton)).toBeVisible();
    }

    async typeEmail(page,email){
        await page.locator(selectors.loginPage.emailInput).fill(email);
    }

    async typePassword(page,password){
        await page.locator(selectors.loginPage.passwordInput).fill(password);
    }

    async clickAuthenticateButton(page){
        await page.locator(selectors.loginPage.authenticateButton).click();
    }
}