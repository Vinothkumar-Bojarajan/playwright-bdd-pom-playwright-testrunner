import { createBdd } from 'playwright-bdd'; //bdd library
const { Given, When, Then } = createBdd(); //bdd library functions
import { expect } from "@playwright/test"; //assertion library
import Login_po from '../pages/login_page'; //page object file
import Login_Data_obj from '../data/login_data.json'; //data file


//step definitions

Given('A web browser is at the saucelabs login page', { timeout: 60000 }, async function ({ page }) {
  await page.goto(Login_Data_obj.SauceDemo_URL);
});

When('A user enters the username {string}, the password {string}, and clicks on the login button', async function ({ page }, username, password) {
  const Login_po_obj = new Login_po(page);
  await Login_po_obj.login_enterUserID(Login_Data_obj.SauceDemo_Username);
  await Login_po_obj.login_enterPassword(Login_Data_obj.SauceDemo_Password);
  await Login_po_obj.login_clickLogin();
});

Then('the url will contains the inventory subdirectory', async function ({ page }) {
  await expect(page).toHaveURL(Login_Data_obj.SauceDemo_Redirect_URL);
});


