import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';
import { AngularPage } from '../pageObjects/AngularPage';

const ngPage = new AngularPage();

Given('I will navigate to AngularJs site', async () => {
  await browser.get('https://angularjs.org/');
});

When('I will click on header link', async () => {
  await ngPage.angularJsLink.click();
});

When('I will navigate to Angular site', async () => {
  const title = await browser.getTitle();
  console.log('browser title', title);
});

Then('I will enter {string} in search box', async (string) => {
  await ngPage.searchInputBox.sendKeys(string);
});
