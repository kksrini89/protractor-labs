import { browser, by, element } from 'protractor';
import { Calculator } from './pageObjects/Calculator';

// TWO Important things implemented here
// --------------------------------------
// 1. Due to webdriver js control flow pattern deprecation: Use async/await or Promise chaining.
// 2. Page Object mechanism (deriving Class Objects which includes properties as an element finder type)

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
});
