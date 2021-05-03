import { browser, by, element } from 'protractor';

describe('Super Calculator Test Spec', () => {
  // browser.driver.manage().window().maximize();
  it('simple math equation', () => {
    // const EC = protractor.ExpectedConditions;
    browser.waitForAngularEnabled(false);
    browser.get('https://juliemr.github.io/protractor-demo/').then(() => {
      element(by.model('first')).sendKeys('5');
      element(by.model('second')).sendKeys('3');
      element(by.model('operator')).element(by.css('option[value=MULTIPLICATION]')).click();
      element(by.id('gobutton')).click();
      // browser.wait(EC.textToBePresentInElementValue(by.tagName('h2'), '.'), 1000);
      // Due to loader coming,
      browser.sleep(2000);
      element(by.repeater('result in memory'))
        .element(by.css('td:nth-child(3)'))
        .getText()
        .then((text) => {
          console.log(text);
          expect(text).toEqual('15');
        });
    });
  });
});
