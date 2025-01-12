const { test,  } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

//Drivers
const TestSetup = require('../drivers/testSetup.js');
const Api = require('../drivers/api.js');

//Pages
const LoginPage = require('../pages/loginPage.js');
const DashboardPage = require('../pages/dashboardPage.js');
const CategoryTypesPage = require('../pages/categoryTypesPage.js');

//Randomly generated credentials to avoid the already existing user error
const email = faker.internet.email();
const password = faker.internet.password();

//Randomly generated names for the categories
const categoryName = faker.internet.username();
const subCategoryName = faker.internet.username();

test.describe('Qubika Test Suite', () => {
  test.beforeAll(async ({browserName}) => await TestSetup.beforeAll(browserName));

  test('Qubika Sports Management System test', async ({request, page}) => {
    await Api.createUser(request,email,password);
    await LoginPage.goToLoginPage(page);
    await LoginPage.verifyEmailInput(page);
    await LoginPage.verifyPasswordInput(page);
    await LoginPage.verifyAuthenticateButton(page);
    await LoginPage.typeEmail(page,email);
    await LoginPage.typePassword(page, password);
    await LoginPage.clickAuthenticateButton(page);
    await DashboardPage.verifyDashboardButton(page);
    await DashboardPage.clickCategoryTypeButton(page);
    await CategoryTypesPage.addCategory(page,categoryName);
    await CategoryTypesPage.goToLastPageOfTable(page);
    await CategoryTypesPage.verifyCategoryTypeAdded(page,categoryName,"",false);
    await CategoryTypesPage.addSubCategory(page,categoryName,subCategoryName);
    await CategoryTypesPage.goToLastPageOfTable(page);
    await CategoryTypesPage.verifyCategoryTypeAdded(page,categoryName,subCategoryName,true);
  });

});



