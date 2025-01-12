const selectors = require('../config/selectors.json');
import { expect } from '@playwright/test';

module.exports = new class CategoryTypesPage {
    async addCategory(page, name){
        await page.waitForTimeout(5000);
        await page.locator(selectors.categoryTypePage.addButton).click();
        await page.locator(selectors.categoryTypePage.form.categoryNameInput).fill(name);
        await page.locator(selectors.categoryTypePage.form.acceptButton).click();
    }

    async addSubCategory(page, parentCategoryName, subCategoryName){
        await page.locator(selectors.categoryTypePage.addButton).click();
        await page.waitForTimeout(500);
        await page.locator(selectors.categoryTypePage.form.categoryNameInput).fill(subCategoryName);
        await page.locator(selectors.categoryTypePage.form.isSubcategoryInput).click();
        await page.locator(selectors.categoryTypePage.form.parentCategoryNameInput).fill(parentCategoryName);
        await page.locator(`//span[text()='${parentCategoryName}']/parent::div`).click();
        await page.locator(selectors.categoryTypePage.form.acceptButton).click();
    }

    async goToLastPageOfTable(page){    
        
        //Implicit wait to get all the pagination buttons
        await page.waitForTimeout(5000);

        await page.locator(selectors.categoryTypePage.paginationButton).click();
    }

    async verifyCategoryTypeAdded(page, categoryName ,subCategoryName = "", isSubcategory){

        if(!isSubcategory){
            await expect(await page.locator(`//td[text()='${categoryName}']`)).toBeVisible();
        }else{
            await expect(await page.locator(`//td[text()='${categoryName}']`)?.locator('nth=-1')).toBeVisible();
            await expect(await page.locator(`//td[text()='${subCategoryName}']`)).toBeVisible();
        }
    }

}