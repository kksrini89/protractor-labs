import { Given, Then, When } from '@cucumber/cucumber';
import { browser } from 'protractor';
import { Calculator } from '../pageObjects/Calculator';

const calculator = new Calculator();

Given('I will navigate to Calc site', async () => {
  await browser.get('https://juliemr.github.io/protractor-demo/');
});

When('I add two numbers {string} and {string}', async (string, string2) => {
  await calculator.firstInput.sendKeys(string);
  await calculator.secondInput.sendKeys(string2);
  await calculator.operatorInput.click();
});

Then('The displayed output should be {string}', async (string) => {
  await calculator.goButton.click();
  const text = await calculator.result.getText();
  console.log(text);
});
