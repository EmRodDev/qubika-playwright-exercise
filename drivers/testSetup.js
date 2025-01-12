require('dotenv').config();

const {BROWSER} = process.env;

const {test} = require('@playwright/test');


module.exports = new class TestSetup{
    async beforeAll(browserName){
     test.skip(browserName.toLowerCase() != BROWSER)
    }
}
