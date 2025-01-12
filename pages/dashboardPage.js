const selectors = require('../config/selectors.json');
import { expect } from '@playwright/test';

module.exports = new class DashboardPage {
    async verifyDashboardButton(page){
        await expect(await page.locator(selectors.dashboardPage.dashboardButton)).toBeVisible();
    }

    async clickCategoryTypeButton(page){
        await page.locator(selectors.dashboardPage.categoryTypeButton).click();
    }
}