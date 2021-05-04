import { browser, by, element } from 'protractor';
import { Calculator } from './pageObjects/Calculator';

describe('Super Calculator Test Spec', () => {
  // browser.driver.manage().window().maximize();
  it('simple math equation', () => {
    // const EC = protractor.ExpectedConditions;
    browser.waitForAngularEnabled(false);
    browser.get('https://juliemr.github.io/protractor-demo/').then(async () => {
      const calculator = new Calculator();
      await calculator.firstInput.sendKeys('5');
      await calculator.secondInput.sendKeys('3');
      await calculator.operatorInput.element(by.css('option[value=MULTIPLICATION]')).click();
      await calculator.goButton.click();
      // browser.wait(EC.textToBePresentInElementValue(by.tagName('h2'), '.'), 1000);
      // Due to loader coming,
      await browser.sleep(2000);
      const text = await element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText();
      console.log(text);
      expect(text).toEqual('15');
    });
  });

  it('open angular website', async () => {
    await browser.get('https://angularjs.org/');
    await element(by.linkText('angular.io')).click();
    await browser.sleep(3000);
    await element(by.css("input[type='search']")).sendKeys('hello');
  });
});
